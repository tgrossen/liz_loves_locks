import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer: Reducer<any> = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
const store = createStoreWithMiddleware(rootReducer, {})

sagaMiddleware.run(sagas)

export default store