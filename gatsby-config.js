module.exports = {
  proxy: {
    prefix: "/rest",
    url: "http://127.0.0.1:8000",
  },
  siteMetadata: {
    title: 'learn css layout',
  },
  plugins: ['gatsby-plugin-react-helmet'],
}
