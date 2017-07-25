import { InstagramFeedState } from './reducer'
import { INSTAGRAM_FEED_STATE_UPDATED, INSTAGRAM_MEDIA_REQUESTED, INSTAGRAM_IMAGE_SELECTED } from './constants'

export const instagramFeedStateUpdated = (state: InstagramFeedState) => ({ type: INSTAGRAM_FEED_STATE_UPDATED, state })
export const fetchInstagramMedia = (userId: string) => ({ type: INSTAGRAM_MEDIA_REQUESTED, userId })
export const selectInstagramImage = (imageId: string) => ({ type: INSTAGRAM_IMAGE_SELECTED, imageId })