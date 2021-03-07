const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
                amber: colors.amber,
                warmGray: colors.warmGray,
            },
            fontFamily: {
                sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
                serif: ['Arvo', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
