import React, {Component, PropTypes} from 'react'
import { Collapse,Row,Col,Icon,Button } from 'antd'

class MemoDoneList extends Component{
	constructor(props){
		super(props);
	}

	handleDel(e){
      let delindex = e.target.getAttribute("data-key");
      this.props.onDel(delindex);
    }

	render() {
		let number = 0;
        this.props.todolist.map((item) => {
        if(item.completed == 2){
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
	                                <h3>已完成</h3>
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
	                            if (item.completed == 2) {
	                                return (
	                                    <li key={i} style={{
	                                        opacity: item.istodo? "0.7": ''
	                                    }}>
	                                        <Row>
	                                            <Col span={3}>
	                                                <input type="checkbox" checked={!item.istodo} data-key={i}/>
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

MemoDoneList.propTypes = {
	onDel: PropTypes.func.isRequired
}

export default MemoDoneList