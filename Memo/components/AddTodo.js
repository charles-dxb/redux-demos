import React, { Component, PropTypes } from 'react'
import { findDOMNode} from 'react-dom'
import { Input, Button } from 'antd'

class AddTodo extends Component {
  render() {
    return (
      <header style={{background: '#000'}}>
        <section>
          <form onSubmit={(e) => this.handleClick(e)} >
            <label htmlFor='newMemo'>备忘录</label>
            <Input type='text' ref='input' placeholder='新建事项' style={{width:'40%'}} id='newMemo'/>
            <Button onClick={(e) => this.handleClick(e)} >
              添加
            </Button>
          </form>
        </section>
      </header>
    )
  }

  handleClick(e) {
    e.preventDefault();
    const node = findDOMNode(this.refs.input)
    const text = node.value.trim()
    console.log(text)
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default AddTodo