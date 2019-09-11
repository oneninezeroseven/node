const { exec } = require('child_process');
// cmd
exec('git add .', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        exec('git commit -m "test"', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        });
        return;
    }
    console.log(stdout);
});



