import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

const header = css`
padding: 1.45rem 1.0875rem;
max-width: 960px;
margin 0 auto;
`

const mainTitle = css`
  margin: 0.5rem auto;
  max-width: 960px;
  font-weight: bold;
  font-size: 2rem;
  display: inline;
  a {
    color: white;
    text-decoration: none;
  }
  @media only screen 
	and (min-device-width: 320px) 
	and (max-device-width: 480px) {
		font-size: 1.7rem;  
  }
`

const menu = css`
list-style: none;
float: right;
color: #fff;
@media only screen 
	and (min-device-width: 320px) 
	and (max-device-width: 480px) {
		float: none;  
  }
`

const menuItem = css`
  display: inline-block;
  margin-right: 1rem;
  a {
    text-decoration: none;
    color: #fff;
  }
`

const LinkItem = props => (
  <li className={menuItem}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{background: 'rebeccapurple'}}>
    <div className={header}>
      <h1 className={mainTitle}>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <ul className={menu}>
        <LinkItem to="/about/">About</LinkItem>
        <LinkItem to="/suggest/">Suggest</LinkItem>
      </ul>
    </div>
  </header>
)

export default Header
