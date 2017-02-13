/**
 * Created by Teddy on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter from '../Components/Counter'
import * as counterActions from '../Actions'

class App extends Component{
    render(){
        const { value, actions } = this.props
        return (
            <Counter value={value} {...actions} />
        )
    }
}

App.propTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
    console.log('.........****')
    console.log(state.value)
    return {
        value : state.value || 0
    }
} 

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(counterActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)