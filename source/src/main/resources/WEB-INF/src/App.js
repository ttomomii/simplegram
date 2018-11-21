import React from 'react'
import {Input} from 'react-onsenui'


export default class App extends React.Component {

    render () {
        return
        <li>ログイン画面</li>
        <Input
        value={this.state.text} float
        onChange={(event) => { this.setState({text: event.target.value})} }
        modifier='material'
        placeholder='Username' />
    }

}