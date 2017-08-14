import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LifeCycle from './LifeCycle'
import './Container.css'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: Math.round(Math.random() * 100)
        }
    }

    propsChange() {
        this.setState({
            num: Math.round(Math.random() * 100)
        })
    }

    setLifeCycleState() {
        this.rLifeCycle.setTheState()
    }

    forceLifeCycleUpdate() {
        this.rLifeCycle.forceItUpdate()
    }

    unmountLifeCycle() {
         // 这里卸载父组件也会导致卸载子组件
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    parentForceUpdate() {
        this.forceUpdate()
    }

    render() {
        return (
            <div className="container">
                <h1>React LifeCycle</h1>
                <a className="weui_btn weui_btn_primary" onClick={this.propsChange.bind(this)}>propsChange</a>
                <a className="weui_btn weui_btn_primary" onClick={this.setLifeCycleState.bind(this)}>setState</a>
                <a className="weui_btn weui_btn_primary" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a>
                <a className="weui_btn weui_btn_primary" onClick={this.unmountLifeCycle.bind(this)}>unmount</a>
                <a className="weui_btn weui_btn_primary" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a>
                <LifeCycle ref={ rLifeCycle => this.rLifeCycle = rLifeCycle } num={this.state.num}></LifeCycle>
            </div>
        )
    }
}

export default Container