import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import BackgroundImages from '../components/background-images.js'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  getInitialState () {
    return {
      hide: false,
    }
  },

  handleHideContent () {
    this.setState({
      hide: !this.state.hide
    })
  },

  goFullscreen () {
    if (document.webkitIsFullScreen) {
      document.webkitExitFullscreen()
    } else {
      document.getElementById('background-images').webkitRequestFullscreen()
    }
  },

  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  childrenWithProps () {
    return React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       hide: this.state.hide
     })
    )
  },

  render () {
    return (
      <div id="wt-outer-container" style={{opacity: 0}}>
        <BackgroundImages
          handleHideContent={this.handleHideContent}
          goFullscreen={this.goFullscreen}
          hide={this.state.hide}
        />
        {this.childrenWithProps()}
      </div>
    )
  },
})
