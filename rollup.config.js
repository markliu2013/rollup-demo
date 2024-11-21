export default {
    input: 'src/index.js',
    output: [
        {
            //打包格式
            format: 'es',
            //打包后文件名
            entryFileNames: '[name].mjs',
            //让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            dir: './dist/es'
        },
        {
            //打包格式
            format: 'cjs',
            //打包后文件名
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            dir: './dist/lib'
        }
    ]
}