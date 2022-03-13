import React from 'react'
import loader from '../img/preloader.svg'

export default function Preloader() {
  return ( 
    <div style={{display: 'flex', height:"100vh"}}>
        <img style={{margin: "auto"}} src={loader} alt="Loading"/>
    </div>
  )
}
