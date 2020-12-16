import React, {Component} from 'react'
import Postdata from '../data.json'

class Postlist extends Component{
    render()
        {
            return(
                <div>
                <li>bcwhjjhbksqikjq</li>
                {Postdata.map((postDetail , index)=>{
         return <h1>{postDetail.name}</h1>
                })}
                </div>
            )
        }
}

export default  Postlist;