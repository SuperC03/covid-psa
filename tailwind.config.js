module.exports = {
  purge: [
    './src/**/*.htm'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'hero-image': "url('https://images.english.elpais.com/resizer/UeqzbGHl_L2tLysUspSUgEwwKl8=/1500x0/filters:focal(1796x886:1806x896)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F7QGBKJUU5FRRO4DRODXRNWZXU.jpg')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
