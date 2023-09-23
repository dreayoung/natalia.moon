/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        bbrown: '#6c3d12',
        goldie: '#cdb480',
        purp: '#f9edf9',
      },
      fontFamily: {
        brsonoma: 'BRSonoma',
        bdsans: 'BDSans',
        brstd: 'BrStd',
      },
      animation: {
        'ping-slow': 'ping 1.5s ease-in-out infinite',
        'spin-slow': 'spin 13s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
