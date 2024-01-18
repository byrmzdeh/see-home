import React from 'react'
import './style.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="big">
                <div className="abouts">
                    <h1>ABOUT US</h1>
                    <p>Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit. Neque <br /> facere laudantium magnam <br /> voluptatum autem. Amet <br /> aliquid nesciunt veritatis <br /> aliquam.</p>
                </div>
                <div className="abouts">
                    <h1>QUICK LINKS</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="abouts">
                    <h1>FOLLOW US</h1>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>
                <div className="abouts">
                    <h1>FEATURED PRODUCT</h1>
                    <img width={200} src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
                    <p>Leather Brown Shoe</p>
                    <h2>$60.00</h2>
                    <button>ADD TO CART</button>
                </div>
            </div>
            <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
        </div>
    )
}

export default Footer