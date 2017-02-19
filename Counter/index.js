/**
 * Created by Teddy on 2017/2/13.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './Components/Counter'
import couter from './reducers'

const store = createStore(couter)

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
            onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
        />,document.getElementById('root')
    )
}

render()
store.subscribe(render)