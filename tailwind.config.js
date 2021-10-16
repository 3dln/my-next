module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],

      serif: ['Poppins','ui-serif', 'Georgia'],

      mono: ['ui-monospace', 'SFMono-Regular'],

      display: ['Oswald'],

      body: ['tahoma'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
