module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-text': 'var(--primary-text)',
        'primary-bg': 'var(--bg)',

        'dark-mode-bg': 'var(--dark-mode-bg)',
        'accent-purple': 'var(--purple)',
        'accent-green': 'var(--green)',
        'accent-green-bg': 'var(--green-bg)',
        'accent-orange': 'var(--orange)',
        'accent-pink': 'var(--pink-2)',
        'accent-pink-bg': 'var(--pink-2-bg)',
        'accent-blue': 'var(--blue)',
        'accent-blue-bg': 'var(--blue-bg)',
        'accent-error': 'var(--error)',
        'accent-error-bg': 'var(--error-bg)',
      },
      boxShadow: {
        normal:
          'var(--hover) 0 54px 55px,var(--hover) 0 -12px 30px,var(--hover) 0 4px 6px,var(--hover) 0 12px 13px,var(--hover) 0 -3px 5px;',
      },
    },
  },
  plugins: [],
};
