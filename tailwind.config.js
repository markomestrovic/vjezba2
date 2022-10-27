module.exports = {
    // mode: 'jit',
    // purge: [
    //     './pages/**/*.{js,ts,jsx,tsx}',
    //     './components/**/*.{js,ts,jsx,tsx}',
    //     './modules/**/*.{js,ts,jsx,tsx}',
    // ],
    darkMode: false, // or 'media' or 'class'
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
            },

            colors: {
                'hci-lila': {
                    light: '#E3CEF0',
                    DEFAULT: '#8034AD',
                    dark: '#612D81',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
