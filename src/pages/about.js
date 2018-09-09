import React from 'react'
import Link from 'gatsby-link'

const PageTwo = () => (
    <div>
        <h1>Hey there 👋</h1>
        <p>
            Vancouver Freelancers is a list of the top 100 freelancer cafes, workspaces, and coworking spaces in Vancouver.
        </p>
        <p>
            Please suggest your favourite venues via our <Link to="/suggest">suggestion page</Link>.
        </p>
    </div>
)

export default PageTwo