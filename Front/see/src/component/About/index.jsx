import React from 'react'
import './style.scss'

const About = () => {
  return (
    <div className='about'>
        <div className="picture">
            <img  src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />
            <div className='for'>
                <h1>Trusted Merchant</h1>
                <p>FOR 50 YEARS</p>
            </div>
        </div>
        <div className="write">
            <h2>MERCHANT COMPANY</h2>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Qui <br /> fuga ipsa, repellat blanditiis nihil, <br /> consectetur. Consequuntur eum <br /> inventore, rem maxime, nisi <br /> excepturi ipsam libero ratione <br /> adipisci alias eius vero vel!</p>
            <button>LEARN MORE</button>
        </div>
    </div>
  )
}

export default About