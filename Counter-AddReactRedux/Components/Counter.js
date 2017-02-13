/**
 * Created by Teddy on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'

class Counter extends Component{
    incrementIfOdd() {
        console.log(this.props.increment())
        if(this.props.value % 2 !== 0){
            this.props.increment()
        }
    }

    incrementAsync() {
        setTimeout(() => {
            this.props.increment()
        }, 1000)
    }

    render(){
        const {value, increment, decrement} = this.props
        return(
            <p>
                Clicked: {value} times.
                <button onClick={() => increment()}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={this.incrementIfOdd.bind(this)}>Increment if odd</button>
                <button onClick={this.incrementAsync.bind(this)}>Increment async</button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Counter
