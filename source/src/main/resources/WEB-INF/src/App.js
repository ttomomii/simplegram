import React from 'react'
import {Input,Button} from 'react-onsenui'


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountId: "",
            password: "",
            errors: []
        };
    }

    onChangeAccountId(inputVal){
        this.setState({
            accountId: inputVal})
    }

    onChangePassword(inputVal){
        this.setState({
            password: inputVal})
    }


    render() {
        return (
            <div>
                <a>ログイン画面</a>
                < Input
                    float
                    onChange={this.onChangeAccountId.bind(this)}
                    modifier='material'
                    placeholder='Account ID'/>
                < Input
                    float
                    onChange={this.onChangePassword.bind(this)}
                    modifier='material'
                    placeholder='Password'/>
                <Button modifier="large--cta">
                    Login
                </Button>
            </div>
        );
    }
}