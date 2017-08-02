import { InstagramFeedState } from './reducer'
import { INSTAGRAM_FEED_STATE_UPDATED, INSTAGRAM_MEDIA_REQUESTED, INSTAGRAM_IMAGE_SELECTED } from './constants'

export const instagramFeedStateUpdated = (state: InstagramFeedState) => ({ type: INSTAGRAM_FEED_STATE_UPDATED, state })
export const fetchInstagramMedia = () => ({ type: INSTAGRAM_MEDIA_REQUESTED })
export const selectInstagramImage = (imageId: string) => ({ type: INSTAGRAM_IMAGE_SELECTED, imageId })