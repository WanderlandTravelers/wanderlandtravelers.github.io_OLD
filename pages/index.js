import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { SocialIcons } from 'react-social-icons'
import Helmet from "react-helmet"
import WanderlandSVG from '../components/wanderland-svg.js'
import TravelersSVG from '../components/travelers-svg.js'
import { config } from 'config'
import '../css/index'
import '../fonts/Pacifico.woff2'

export default class Index extends React.Component {
  getContent () {
    let classes = 'wt-center wt-index wt-box'
    if (this.props.hide) {
      classes += ' hidden'
    }
    const socialUrls = [
      'https://www.instagram.com/wanderlandtravelers/',
      'https://www.youtube.com/channel/UCOMc1_p6kN13sgXYOtcxn-A',
      'https://www.facebook.com/wanderlandtravelers/',
      'https://twitter.com/wanderlandistas',
      'https://www.pinterest.com/wanderlandtravelers/',
    ]
    return (
      <article className={classes}>
        <header>
          <h1><WanderlandSVG /></h1>
          <figure id="avatar">
            <img src="/images/avatar.jpg" alt="Maggie & Brad" />
          </figure>
          <h1><TravelersSVG /></h1>
        </header>
        <SocialIcons id="social-icons" urls={socialUrls} />
        {/*<iframe
          width="356"
          height="200"
          src="https://www.youtube.com/embed/X9gTuZvFAW4"
          frameborder="0"
          allowfullscreen>
        </iframe>*/}
      </article>
    )
  }

  render () {
    return (
      <div id="wt-content">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "A couple travelling, working, and filming it all as they go"},
            {"name": "keywords", "content": "travel, travelling, travelers, motorhome, nomad, nomads, digital nomads"},
          ]}
        />
        {this.getContent()}
      </div>
    )
  }
}
