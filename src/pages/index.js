import React, { Component } from 'react'
import Link from 'gatsby-link'
import MainMap from '../components/leaflet'
import { css } from 'emotion'

const intro = css`
  font-size: 1.25rem;
  font-weight: 300;
  p {
    color: #6c757d;
  }
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

const jumboHeading = css`
font-weight: 300;
text-align: center;
`

const IndexPage = () => (
  <div>

    <MainMap /> 

    <section className={intro}>
      <h1 className={jumboHeading}>vancouver freelancers</h1>
        <p>
          Vancouver Freelancers is a list of the top 100 freelancer cafes, workspaces, and coworking spaces in Vancouver.
        </p>
        <button className={btn}>
          <Link to="/about/">Learn More</Link>
        </button>
        {/* COUNTER HERE */}
    </section>

  </div>
)

export default IndexPage
