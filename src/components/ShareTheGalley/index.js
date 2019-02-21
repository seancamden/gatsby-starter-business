import React, {Component} from 'react'
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
} from 'react-share'
import config from '../../../data/config'
import './styles.sass'

class ShareTheGalley extends Component {
  render () {
    const {title, slug, excerpt, mobile} = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <div className='social-links'>
        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>
    )
  }
}

export default ShareTheGalley
