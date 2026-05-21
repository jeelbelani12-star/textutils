import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }

    return (
    <div className='container' >
        <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1> 
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 TextUtils gives you a quick and efficient way to analyze your text. Count words, characters, reading time, and transform your content instantly with useful text utilities.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 TextUtils is completely free to use for everyone. You can edit, format, and analyze your text without any signup or subscription.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 This website works smoothly across all modern browsers including Chrome, Firefox, Edge, and Safari, giving you a seamless experience everywhere.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
        </div> */}
    </div>
  )
}
