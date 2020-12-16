import React, { Component } from 'react'
import quotesData from './quotes.json'

var quotesList = quotesData.quotes;
class Quotes extends Component{
    render(){
        return(
            <ul>
                {
                    quotesList.map((s)=>{
                        return(
                            <div>
                               <div>{s.title}</div>
                               <div>{s.image}</div>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Quotes;