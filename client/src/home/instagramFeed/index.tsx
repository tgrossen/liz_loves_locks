import * as React from 'react'
import { connect } from 'react-redux'
import styleable, { StyleableProps } from 'react-styleable'
import { InstagramMediaResult } from './interfaces'
import { fetchInstagramMedia, selectInstagramImage } from './actions'
import InstagramImage from './instagramImage'
import * as css from './instagramFeed.mod.scss'

interface InstagramFeedProps extends StyleableProps {
  media: InstagramMediaResult
  selectedImageId: string
  fetchInstagramMedia: (userId: string) => void
  selectInstagramImage: (imageId: string) => void
}

const userId = 'liz_loves_locks'

const InstagramFeed = (props: InstagramFeedProps) => {
  if (!props.media || props.media == null) {
    props.fetchInstagramMedia(userId)
    return null
  }

  return (
    <ul className={props.css.instagramFeed}>
      {props.media.items.map(item => <InstagramImage selectedImageId={props.selectedImageId} userId={userId} item={item} selectInstagramImage={props.selectInstagramImage} />)}
    </ul>
  )
}

export default connect(
  state => ({ ...state.instagramFeed }),
  dispatch => ({
    fetchInstagramMedia: (userId: string) => dispatch(fetchInstagramMedia(userId)),
    selectInstagramImage: (imageId: string) => dispatch(selectInstagramImage(imageId))
  })
)(styleable(css)(InstagramFeed))