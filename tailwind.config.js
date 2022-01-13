module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#730C07',
                red: '#EB3F36',
                secondary: '#F5F5F5',
                brown: '#696969'
              },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
