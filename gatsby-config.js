require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: '☕ vancouver freelancers',
    description: 'Vancouver Freelancers is a list of the top 100 freelancer cafes, workspaces, and coworking spaces in Vancouver.',
    author: 'Daniel Reed',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-leaflet'
  	],
}
