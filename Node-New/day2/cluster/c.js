const cluster = require('cluster');
const http = require('http');
const cpuInfo = require('os').cpus();
// console.log(cpuInfo.length);
// 判断主进程
let numReqs = 0;
if (cluster.isMaster) {
    setInterval(() => {
        console.log('被请求数量', numReqs)
    }, 1000);
    for (let i = 0; i < cpuInfo.length; i++) {
        // 7份
        cluster.fork();
    }
    for (const id in cluster.workers) {
        // console.log(cluster.workers[id])
        // 监听每条进程
        // 计算机网络
        cluster.workers[id].on('message', (msg) => {
            if (msg.cmd && msg.cmd === 'notifyRequest') {
                numReqs += 1;
            }
        });
    }
    // 7个进程需要做事情的地方
} else {
    http.createServer((req, res) => {
        // 向主进程发信息
        process.send({ cmd: 'notifyRequest' });
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);
}