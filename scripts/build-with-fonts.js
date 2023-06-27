import { spawn } from 'child_process';

const dev = spawn('npm', ['run', 'dev'], { shell: true });

dev.on('spawn', () => {
  console.log('[Spawn] Starting dev server...');
})

dev.stdout.on('data', (data) => {
  console.log('[Dev] ' + data.toString());

  if (data.toString().includes('ready')) {

    const compileFonts = spawn('npm', ['run', 'compileFonts'], { shell: true });

    compileFonts.on('spawn', () => {
      console.log('[Spawn] Compiling fonts...');
    })

    compileFonts.on('exit', () => {

      console.log('[Spawn] Fonts compiled!');

      dev.kill('SIGKILL');

      const build = spawn('npm', ['run', 'build'], { shell: true });

      build.on('spawn', () => {
        console.log('[Spawn] Building...');
      })

      build.on('exit', () => {
        console.log('[Spawn] Build completed!')
      })

      build.stdout.on('data', (data) => {
        console.log('[Build] ' + data.toString());
      });

    })

    compileFonts.stdout.on('data', (data) => {
      console.log('[CompileFonts] ' + data.toString());
    });

    compileFonts.stderr.on('data', (data) => {
      console.log('[CompileFonts] ' + data.toString());
    });

  }

});

dev.on('exit', () => {
  console.log('[Spawn] Dev server stopped!');
})