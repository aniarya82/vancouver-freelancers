import React, { Component } from 'react'
import Link from 'gatsby-link'
import MainMap from '../components/leaflet'
import styled, { css } from 'emotion'

const lead = css`
max-width:960px;
margin: 1rem auto;
`

const IndexPage = () => (
  <div>

    <MainMap /> 

    <div className={lead}>
      <p>
        Vancouver Freelancers is a list of the top 100 freelancer cafes, workspaces, and coworking spaces in Vancouver.
      </p>
      <p>
        Lorem ipsum dolor amet post-ironic air plant irony photo booth schlitz forage craft beer scenester tbh meditation chillwave poutine bitters put a bird on it. Umami coloring book pinterest chartreuse butcher glossier tumblr ugh. Lo-fi DIY marfa ennui. Photo booth ethical DIY taxidermy cloud bread jianbing.
      </p>
      <p>
        Bitters meggings bicycle rights, af 8-bit vinyl cray stumptown fashion axe art party schlitz semiotics ramps before they sold out. Shabby chic drinking vinegar tote bag flexitarian, la croix blog dreamcatcher farm-to-table hoodie pop-up kogi etsy. Cliche dreamcatcher taxidermy chartreuse listicle pug schlitz tousled whatever blue bottle bespoke neutra normcore. Live-edge blog kitsch whatever meditation migas tofu palo santo, snackwave fam forage distillery. Organic yr retro neutra scenester tbh cloud bread direct trade raclette celiac craft beer. Ramps cold-pressed sriracha hell of vaporware celiac pug biodiesel irony keytar brooklyn brunch banjo shabby chic craft beer.
      </p>
      <button>
        <Link to="/page-2/">Go to page 2</Link>
      </button>
    </div>

  </div>
)

export default IndexPage
