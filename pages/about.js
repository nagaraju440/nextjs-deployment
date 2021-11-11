import React, { Component } from 'react'
import { withRouter } from 'next/router'
class about extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount=()=>{
        console.log("props is ",this.props.router.query.name)
    }
    render() {
        return (
            <div>
                hello this is about page
            </div>
        )
    }
}
export default withRouter(about)
