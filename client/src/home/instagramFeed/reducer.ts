import { INSTAGRAM_FEED_STATE_UPDATED } from './constants'
import { InstagramMediaResult } from 'src/home/instagramFeed/interfaces'

export interface InstagramFeedState {
  media: InstagramMediaResult
  selectedImageId: string
}

const initialState: InstagramFeedState = {
  media: null,
  selectedImageId: null
}

export default (state = initialState, action?: any) => {
  console.log(action.state)
  const handlers = {
    [INSTAGRAM_FEED_STATE_UPDATED]: () => ({ ...action.state })
  }

  return handlers[action.type]
    ? handlers[action.type]()
    : state
}