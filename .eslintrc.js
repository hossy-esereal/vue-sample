module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/essential'],
    plugins: [],
    // add your custom rules here
    rules: {
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/html-indent': ['error', 4],
        indent: ['error', 4],
        'space-before-function-paren': ['error', 'never']
    }
}
