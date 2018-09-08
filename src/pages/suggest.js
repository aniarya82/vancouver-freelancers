import React from 'react'
import Link from 'gatsby-link'

const Suggest = () => (
    <div>
        <h1>Want to suggest a new venue?</h1>
        <p>
            Just fill in the form below and we will take a look ☕ 
        </p>
        <div>
        <form method="POST" action="https://formspree.io/danieel.reed@gmail.com">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <input type="hidden" name="_next" value="/thanks" />
            <br/>
            <button type="submit">Send</button>
        </form>
        </div>
    </div>
)

export default Suggest