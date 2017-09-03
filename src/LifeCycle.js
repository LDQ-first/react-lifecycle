import React, {Component} from 'react'
import './LifeCycle.css'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        alert('Initial render')
        alert(`constructor\n\n
        构造函数，在创建组件的时候调用一次`)
        this.state = {
            str: "LifeCycle"
        }
    }

    componentWillMount() {
        alert(`componentWillMount\n\n
        在组件挂载之前调用一次。如果在这个函数里面调用setState，
        本次的render函数可以看到更新后的state，并且只渲染一次。`)
    }
    
    componentDidMount() {
        alert(`componentDidMount\n\n
        在组件挂载之后调用一次。这个时候，子组件也都挂载好了，可以在这里使用refs。
        this.propsNum: ${this.propsNum}`)
    }

    componentWillReciveProps(nextProps) {
        alert(`componentWillReciveProps\n\n
        props是父组件传递给子组件的。
        父组件发生render的时候子组件就会调用componentWillReceiveProps
        （不管props有没有更新，也不管父子组件之间有没有数据交换）。`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        alert(`shouldComponentUpdate\n\n
        组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。
        默认返回true，需要重新render。
        在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。`)
        return true          // 记得要返回true
    }

    componentWillUpdate(nextPropa, nextState) {
        alert(`componentWillUpdate\n\n
        shouldComponentUpdate返回true或者调用forceUpdate之后，
        componentWillUpdate会被调用。`)
    }

    componentDidUpdate() {
        alert(`componentDidUpdate\n\n
        除了首次render之后调用componentDidMount，
        其它render结束之后都是调用componentDidUpdate。`)
    }
    
    componentWillUnmount() {
        alert(`componentWillUnmount\n\n
        组件被卸载的时候调用。
        一般在componentDidMount里面注册的事件需要在这里删除。`)
    }
    
    setTheState() {
        let s = 'hello'
        if(this.state.str === s) {
            s = 'HELLO'
        }
        this.setState({
            str: s
        })
    }

     forceItUpdate() {
        this.forceUpdate();
    }

    
    render() {
        alert(`render\n\n
        render是一个React组件所必不可少的核心函数（上面的其它函数都不是必须的）。
        记住，不要在render里面修改state。`)
        return (
            <div className="LifeCycle">
                <span ref={span => this.propsNum = span}>
                    {"Props:"}
                    <h2>{parseInt(this.props.num, 10)}</h2>
                </span>
                <br/>
                <span>
                    {"State:"}
                    <h2>{this.state.str}</h2>
                </span>
            </div>
        )
    }
}


export default LifeCycle