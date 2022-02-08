import {useState} from 'react'
import React, { PureComponent } from 'react'





export default function TextForm(props) {

    function reverse(str,start,end)
    {
        
        let temp;
        
        
        while (start <= end) 
        {
            
            temp = str[start];
            str[start]=str[end];
            str[end]=temp;
            start++;
            end--;
        }
    }
    
    function reverseWords(s)
    {
        
        s=s.split("");
        let start = 0;
        for (let end = 0; end < s.length; end++) 
        {
            
            if (s[end] === ' ') 
            {
                reverse(s, start, end);
                start = end + 1;
            }
        }
        
        reverse(s, start, s.length - 1);
        reverse(s, 0, s.length - 1);
        return s.join("");
    }
    
    
    const handleclick = ()=>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    
    }
    const handlechange = ()=>{
        console.log('changed');
        setText(window.event.target.value);

    }
    const handleclick2 =()=>{
        console.log("lowercase was clicked")
        let newText1 = text.toLowerCase();
        setText(newText1);
    }
    const handleclick3 =()=>{
        console.log('Reverse was clicked');
        let newText2 = reverseWords(text);
        setText(newText2);        
    } 
    const handleclick4 =()=>{
        let newText4 =('');
        setText(newText4);
       }
    const [text, setText] = useState('');
//setText("new text");
    return (
        <>
        <div className="container" style = {{color: props.mode ==='dark'?'white':'#19193d'}} >
        <h1>{props.heading} </h1>'
        <div className="mb-3" >
        <textarea className="form-control" value= {text}   onChange ={handlechange} style ={{backgroundColor : props.mode ==='dark'?'#19193d':'white',
        color: props.mode ==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
</div>
<div className="container my-3">
<button className="btn btn-primary mx-2" onClick={handleclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleclick2}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleclick3}>Reverse the Word</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleclick4}>Clear</button>
    </div>
    
    <div className="container my-3" style ={{color: props.mode ==='dark'?'white':'#19193d'}}>
    <h1>your text summary</h1>
    <p> {text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {0.008*text.split("").length } minutes read</p>
    
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
        
   </>
    )

}
