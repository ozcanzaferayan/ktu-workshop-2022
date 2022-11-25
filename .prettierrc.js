module.exports = {
    printWidth: 100,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^@components/(.*)$',
        '^@features/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
