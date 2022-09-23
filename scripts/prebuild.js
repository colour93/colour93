// // 构建前工作

import { exec } from 'child_process';

// // 使用 dev 启动实时预览
// const devExec = exec('npm run dev');

// devExec.on('spawn', () => {
//     console.log('Vite dev is running...');
// })

// devExec.on('error', (e) => {
//     console.log('Vite dev started failed!');
//     console.log(e);
// })

// devExec.on('exit', (code, signal) => {
//     console.log('Vite dev closed.');
//     console.log('code', code, 'signal', signal);
// })

// let i = 1;
// devExec.stdout.on('data', (e) => {
//     if (i == 2) {

//         console.log(e);

        // 使用 complieFonts 打包字体
        const complieFontsExec = exec('npm run complieFonts');
        // const complieFontsExec = exec('glyphhanger http://127.0.0.1:5173 --subset=./fonts/LXGWWenKai-Regular.ttf --formats=ttf');

        complieFontsExec.on('spawn', () => {
            console.log('Compling fonts...');
        })

        complieFontsExec.on('error', (e) => {
            console.log('Complied failed!');
            console.log(e);
        })

        complieFontsExec.on('close', (code, signal) => {
            console.log('Complied successfully!');
            console.log('code', code, 'signal', signal);
            // devExec.kill();
        })

        complieFontsExec.stdout.on('data', (e) => {
            console.log(e);
        })

//     }
//     i++;
// })