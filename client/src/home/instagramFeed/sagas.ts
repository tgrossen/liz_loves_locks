import { call, put, select } from 'redux-saga/effects'
import { fetchInstagramMedia } from './effects'
import { instagramFeedStateUpdated } from './actions'
import { getInstagramFeedState } from './selectors'

export function* instagramMediaRequested(): any {
  const media = yield call(fetchInstagramMedia)
  yield put(instagramFeedStateUpdated({ media, selectedImageId: null }))
}

export function* instagramImageSelected(action: { imageId: string }): any {
  const initialState = yield select(getInstagramFeedState)
  yield put(instagramFeedStateUpdated({
    ...initialState,
    selectedImageId: initialState.selectedImageId == action.imageId ? null : action.imageId
  }))
}