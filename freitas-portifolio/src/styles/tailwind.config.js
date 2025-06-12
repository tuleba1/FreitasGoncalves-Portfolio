/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#c12026',
                secondary: '#333333',
            },
        },
    },
    plugins: [],
};
