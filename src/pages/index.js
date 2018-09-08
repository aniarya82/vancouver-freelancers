import React, { Component } from 'react'
import Link from 'gatsby-link'
import MainMap from '../components/leaflet'
import { css } from 'emotion'

const lead = css`
  max-width: 960px;
  margin: 1rem auto;
`

const btn = css`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  color: #363636;
  cursor: pointer;
  padding-bottom: calc(.375em - 1px);
  padding: 0.5rem;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-size: 1rem;
  display: inline;
  a {
    text-decoration: none;
  }

`

const IndexPage = () => (
  <div>

    <MainMap /> 

    <div className={lead}>
    <hr style={{backgroundColor:' #f5f5f5', border: 'none', display: 'block', height: '2px'}} />
      <p>
        Vancouver Freelancers is a list of the top 100 freelancer cafes, workspaces, and coworking spaces in Vancouver.
      </p>
      <p>
        Lorem ipsum dolor amet post-ironic air plant irony photo booth schlitz forage craft beer scenester tbh meditation chillwave poutine bitters put a bird on it. Umami coloring book pinterest chartreuse butcher glossier tumblr ugh. Lo-fi DIY marfa ennui. Photo booth ethical DIY taxidermy cloud bread jianbing.
      </p>
      <button className={btn}>
        <Link to="/about/">Learn More</Link>
      </button>
      {/* COUNTER HERE */}
    </div>

  </div>
)

export default IndexPage
