import React from 'react'
import Link from 'gatsby-link'

const PageTwo = () => (
    <section>
        <h1>Hey there 👋</h1>
        <p>
            Vancouver Freelancers is a list of the top 100 freelancer cafes, workspaces, and coworking spaces in Vancouver. Thanks to <a href="http://scoutmagazine.ca/2015/12/21/top-five-work-friendly-vancouver-cafes-with-high-quality-coffee-super-strong-wifi/" target="_blank">SCOUT</a> for their suggestions too.
        </p>
        <p>
            Please suggest your favourite venues via our <Link to="/suggest">suggestion page</Link>.
        </p>
    </section>
)

export default PageTwo