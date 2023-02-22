import React from 'react'
import { Link } from 'react-router-dom'



export default function Intro() {
    return (
        <div >
        <div className="blob-container">
            <img src="https://res.cloudinary.com/dav8yugzm/image/upload/v1675845277/blob_5_kuf8kj.png" className="blob" />
        </div>
        <div className="intro-container">
        
            <h1 className="title">Quizzical</h1>
            <p className="description">Are you smart or fucking retarded? Lets find out!</p>
            <Link to='/quiz' >
            <button className="start-button" >Start quiz</button>
            </Link>
        </div>
        <div className="blob2-container">
            <img src="https://res.cloudinary.com/dav8yugzm/image/upload/v1675888008/blob_5_wgyqqn.png" className="blob2"/>
        </div>
       
        </div>
    )
}