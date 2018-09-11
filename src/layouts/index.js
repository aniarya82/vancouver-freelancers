import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'react-emotion'

import Header from '../components/header'
import Footer from '../components/footer'
import '../css/index.css'
import '../css/normalize.css'

const footerSet = css`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name='description' content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
    />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>
      {children()}
    </main>

   <div className="footer"><Footer /></div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
