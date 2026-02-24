// build-bundle.mjs
import esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['workbox-entry.js'],
    bundle: true,
    outfile: 'workbox-bundle.js',
    format: 'esm',                // ESM output – what you want to import
    platform: 'browser',
    target: ['es2022', 'safari15'],
    minify: true,                 // optional: smaller file
    sourcemap: true,              // helpful for debugging
    logLevel: 'info',
    banner: {
        js: '// Workbox ESM bundle – generated ' + new Date().toISOString()
    }
}).catch(() => process.exit(1));