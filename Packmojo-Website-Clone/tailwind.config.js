/** @type {import('tailwindcss').Config} */
module.exports ={
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        customBlue: '#32325c',
      },
    },
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};