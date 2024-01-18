import React from 'react'
import './style.scss'

const Offer = () => {
    return (
        <div className='offer'>
            <p className='popular'>OUR SERVICES</p>
            <h1>We Offer Services</h1>

            <div className="cards">
                <div className="card">
                    <i class="fa-brands fa-squarespace"></i>
                    <div className="write">
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    </div>
                </div>

                <div className="card">
                <i class="fa-solid fa-square-minus"></i>
                    <div className="write">
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    </div>
                </div>

                <div className="card">
                <i class="fa-regular fa-clock"></i>
                    <div className="write">
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    </div>
                </div>

                <div className="card">
                <i class="fa-solid fa-square-check"></i>
                    <div className="write">
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    </div>
                </div>

                <div className="card">
                <i class="fa-solid fa-briefcase"></i>
                    <div className="write">
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    </div>
                </div>

                <div className="card">
                <i class="fa-solid fa-cloud-moon"></i>
                    <div className="write">
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer