import React from 'react'
import "./Teacup.css";

function Teacup() {
  return (
    <div className='teacup'>
        <div className="plate"></div>
        <div className="cup">
            <div className="top">
                <div className="vapour">
                    <span style={{"--i": 1}}></span>
                    <span style={{"--i":3}}></span>
                    <span style={{"--i":5}}></span>
                    <span style={{"--i":13}}></span>
                    <span style={{"--i":6}}></span>
                    <span style={{"--i":7}}></span>
                    <span style={{"--i":10}}></span>
                    <span style={{"--i":8}}></span>
                    <span style={{"--i":11}}></span>
                    <span style={{"--i":12}}></span>
                    <span style={{"--i":2}}></span>
                    <span style={{"--i":9}}></span>
                    <span style={{"--i":4}}></span>
                </div>
                <div className="circle">
                    <div className="tea"></div>
                </div>
            </div>
            <div className="handle"></div>
        </div>
    </div>
  )
}

export default Teacup