import React, { Component } from 'react'
import Router, { withRouter,useRouter } from 'next/router'

export default class contact extends Component {
    constructor(props){
        super(props);

    }
    delay=()=>{
        return new Promise((res,rej)=>{
            var a=1+1
            if(a==3){
                res()
            }else{
                rej()
            }
        })
    }
     componentDidMount(){
        // const  res = await fetch("http://localhost:4000/babay")
        // const data = await res.json();
         console.log("data from mount")
         console.log("props is",this.props.data)
    this.delay().then(l=>{
        console.log("resolved bro")
    }).catch(e=>{
        console.log("rejected bro")
    })
    }
    render() {
        console.log("hiiii")

        return (
            <div>
                Hello this is contact page brp
                <button  onClick={()=>{
                  Router.back()
                }}>Go back</button>
                <br></br>
               <div>{this.props.data.a}</div>
            </div>
        )
    }
}
export async function getServerSideProps(context) {
    const  res = await fetch("http://localhost:4000/babay")
    const data = await res.json();
//   console.log("hehhehheh e hehe")
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }