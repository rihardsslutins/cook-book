/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '320px',
            md: '740px',
            lg: '1200px',
        },
        extend: {
            fontFamily: {
                quicksand: ['Quicksand'],
            },
        },
    },
    plugins: [],
};
