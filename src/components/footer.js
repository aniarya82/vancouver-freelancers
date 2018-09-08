import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

const footer = css`
padding: 1.45rem;
text-align: center;
font-size: 0.8rem;
@media only screen 
	and (min-device-width: 320px) 
	and (max-device-width: 480px) {
		text-align: left;  
  }
`

const LinkItem = props => (
  <li className={menuItem}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Footer = ({ siteTitle }) => (
<footer className={footer}>
    Made with 💗 in Vancouver by <a href="https://github.com/kwaimind" target="_blank">Daniel Reed</a>
</footer>
)

export default Footer
