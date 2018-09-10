import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

const formGroup = css`
width: 250px;
margin: 0 auto;
`

const textArea = css`
display: block;
max-width: 100%;
min-width: 100%;
padding: .625em;
resize: vertical;
background-color: #fff;
color: #363636;
box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
max-width: 100%;
width: 100%;
-moz-appearance: none;
-webkit-appearance: none;
align-items: center;
border: 1px solid #dbdbdb;
border-radius: 4px;
box-shadow: none;
display: inline-flex;
font-size: 1rem;
height: 2.25em;
justify-content: flex-start;
line-height: 1.5;
padding-bottom: calc(.375em - 1px);
padding-left: calc(.625em - 1px);
padding-right: calc(.625em - 1px);
padding-top: calc(.375em - 1px);
position: relative;
vertical-align: top;
margin-bottom: .75rem;
`

const input = css`
background-color: #fff;
color: #363636;
box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
max-width: 100%;
width: 100%;
-moz-appearance: none;
-webkit-appearance: none;
align-items: center;
border: 1px solid #dbdbdb;
border-radius: 4px;
box-shadow: none;
display: inline-flex;
font-size: 1rem;
height: 2.25em;
justify-content: flex-start;
line-height: 1.5;
padding-bottom: calc(.375em - 1px);
padding-left: calc(.625em - 1px);
padding-right: calc(.625em - 1px);
padding-top: calc(.375em - 1px);
position: relative;
vertical-align: top;
margin-bottom: .75rem;
`

const btnSubmit = css`
background-color: #23d160;
border-width: 1px;
color: #fff;
cursor: pointer;
justify-content: center;
padding-bottom: calc(.375em - 1px);
padding-left: .75em;
padding-right: .75em;
padding-top: calc(.375em - 1px);
text-align: center;
white-space: nowrap;
-moz-appearance: none;
-webkit-appearance: none;
align-items: center;
border: 1px solid #23d160;
border-radius: 4px;
box-shadow: none;
display: inline-flex;
font-size: 1rem;
height: 2.25em;
justify-content: flex-start;
line-height: 1.5;
padding-bottom: calc(.375em - 1px);
padding-left: calc(.625em - 1px);
padding-right: calc(.625em - 1px);
padding-top: calc(.375em - 1px);
position: relative;
vertical-align: top;
&:hover {
    background-color: #22c65b;
  }
`

const Suggest = () => (
    <section>
        <h1>Want to suggest a new venue?</h1>
        <p>
            Just fill in the form below and we will take a look ☕ 
        </p>
        <div>
        <form method="POST" action="https://formspree.io/danieel.reed@gmail.com" className={formGroup}>
            <input type="text" name="name" placeholder="Name of the Venue" className={input} required />
            <input type="url" name="map-link" placeholder="Google Maps Link" className={input} required />
            <textarea name="message" placeholder="Any comments" className={textArea} required></textarea>
            <input type="hidden" name="_next" value="/thanks" />
            <br/>
            <button type="submit" className={btnSubmit}>Send</button>
        </form>
        </div>
    </section>
)

export default Suggest