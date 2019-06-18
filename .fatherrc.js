export default {
    esm: {
        type: 'rollup'
    },
    umd: {
        name: 'compButton',
    },
    extraBabelPlugins: [
        ['babel-plugin-import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }]
    ],
}