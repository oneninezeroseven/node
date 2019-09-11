const { exec } = require('child_process');

const run = (cmd) => {
    return new Promise((resolve, reject) => {
        // cmd
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            } else {
                resolve(stdout)
                console.log(stdout);
            }
        });
    })
}
// 子进程 !== 紫禁城
(async () => {
    await run('git add .')
    await run('git commit -m "test"')
    await run('git push origin master')
})()