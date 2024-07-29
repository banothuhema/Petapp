import React from 'react'

const Footer =()=>{
    return(
        <div id='contact'>
        <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{height:"50px",color:'gray'}} >Contact us</button>
        </div>
        <p style={{color:"white"}}>
        "Where health meets happiness, and style meets wagging tails – Seamless wellgoomed services at Your Fingertips!"</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 127-865-586-67</p>
      <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()} By WellGroomed. <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
    )
}

export default Footer