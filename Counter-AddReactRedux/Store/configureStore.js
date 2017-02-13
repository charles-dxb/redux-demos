import { createStore } from 'redux'
import movement from '../Reducers/movement'

export default function configureStore() {
// 创建Store非常简单。createStore 有两个参数，Reducer 和 initialState。  将reducer的数据更新拿过来，然后如果没有更新的话就传一个默认值

  const store = createStore(movement)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../Reducers', () => {
      const nextReducer = require('../Reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}