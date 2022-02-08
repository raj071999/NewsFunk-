import React, {useState} from 'react'

export default function About(props) {
    let myStyle ={
        color : props.mode=== 'dark'? 'white':'black',
        backgroundColor : props.mode === 'dark'?'black':'white',
      
    
    }
    return (
        <div className="container" style={myStyle}>
            <h2 className ="" my-2> About Us  </h2>
                    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style ={myStyle}>
                <strong>This website will check the word list and the time taken by the sentence to be dictated orally.</strong> 
            </div>
            </div>
        </div>
        </div>
        </div>
        
    )
}
