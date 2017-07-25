import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import * as InstagramFeedTypes from '../instagramFeed/constants'
import * as instagramFeedSagas from '../instagramFeed/sagas'

function watchEvery(actionType, saga) {
  return fork(function* () {
    yield takeEvery(actionType, saga)
  })
}

export default function* root() {
  yield [
    watchEvery(InstagramFeedTypes.INSTAGRAM_MEDIA_REQUESTED, instagramFeedSagas.instagramMediaRequested),
    watchEvery(InstagramFeedTypes.INSTAGRAM_IMAGE_SELECTED, instagramFeedSagas.instagramImageSelected)
  ]
}