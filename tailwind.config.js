/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/screens/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'primary-black': ['Black', 'sans-serif'],
                'primary-extra-bold': ['Extra Bold', 'sans-serif'],
                'primary-bold': ['Bold', 'sans-serif'],
                'primary-regular': ['Regular', 'sans-serif'],
                // Montserrat
                'secondary-regular': ['MRegular', 'sans-serif']
            },
            colors: {
                primary: {
                    'base': '#ECA400'
                },
                secondary: {
                    'base': '#EAF8BF'
                },
                tertiary: {
                    'base': '#006992'
                },
            },
        }
    },
    plugins: []
}
