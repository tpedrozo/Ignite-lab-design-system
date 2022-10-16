/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        colors: {
            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            gray: {
                900: '#121214',
                800: '#202024',
                400: '#7c7c8a',
                200: '#C4C4CC',
                100: '#E1E1E6'
            },

            cyan: {
                500: '#81d8f7',
                300: '#9be1fb'
            }
        },
        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif'
            }
        }
    },
    plugins: []
}

