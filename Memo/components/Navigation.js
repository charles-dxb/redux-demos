import React, {Component, PropTypes} from 'react'
import NavLink from './NavLink'
import {Tabs,Button,Row,Col} from 'antd'

export default class Navigation extends Component{
	render() {
       const TabPane = Tabs.TabPane
       return (
          <div>
                <Row className='className' type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink to="/" onlyActiveOnIndex={true}>
                            全部&nbsp;
                            <Button shape="circle" size="small">{this.props.allNum}</Button>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/todo">
                            新建事项&nbsp;
                            <Button shape="circle" size="small">{this.props.todoNum}</Button>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/doing">
                            正在进行
                            <Button shape="circle" size="small">{this.props.doingNum}</Button>
                        </NavLink>

                    </Col>
                    <Col span={6}>
                        <NavLink to="/done">
                            已完成
                            <Button shape="circle" size="small">{this.props.doneNum}</Button>
                        </NavLink>
                    </Col>
                </Row>
          </div>
       )
	}
}