import React, {Component, PropTypes} from 'react'
import { Collapse,Row,Col,Icon,Button } from 'antd'

class MemoTodoList extends Component{
    constructor(props){
      super(props);
    }

    handleDel(e){
      let delindex = e.target.getAttribute("data-key");
      this.props.onDel(delindex);
    }

    handleToDoing(e){
      let changeIndex = e.target.getAttribute("data-key");
      this.props.onTodoToDoing(changeIndex);
    }

    render() {
      let number = 0;
      this.props.todolist.map((item) => {
        if(item.completed == 0){
          number++;
        }
      });

      const collapseStyle = {
        width: '100%',
        maxWidth: "800px",
        margin:"0 auto"
      }

      const Panel = Collapse.Panel;

   	  return (
            <main>
                <Collapse style={collapseStyle}>
                    <Panel header={
                        <Row>
                            <Col span={22}>
                                <h3>新建事项</h3>
                            </Col>
                            <Col span={2}>
                                <Button
                                    size="small"
                                    shape="circle">
                                    {number}
                                </Button>
                            </Col>
                        </Row>
                    }>
                    <ul>
                        {this.props.todolist.map((item, i) => {
                            if (item.completed == 0) {
                                return (
                                    <li key={i} style={{
                                        opacity: item.istodo? "0.7": ''
                                    }}>
                                        <Row>
                                            <Col span={3}>
                                                <input type="checkbox" checked={!item.istodo} onChange={this.handleToDoing.bind(this)} data-key={i}/>
                                            </Col>
                                            <Col span={20}>
                                                <p>{item.todo}</p>
                                            </Col>
                                            <Col span={1}>
                                                <Icon type="close-circle"  data-key={i}
                                                style={{fontSize:"20px"}}
                                                onClick={this.handleDel.bind(this)}/>
                                            </Col>
                                        </Row>
                                    </li>
                                )
                            }
                        })
                    }
                    </ul>
                    </Panel>
                </Collapse>

            </main>
        )
   }
}

MemoTodoList.propTypes = {
   onDel: PropTypes.func.isRequired,
   onTodoToDoing: PropTypes.func.isRequired
}

export default MemoTodoList