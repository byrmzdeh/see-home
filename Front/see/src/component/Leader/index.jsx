import React from 'react'
import './style.scss'

const Leader = () => {
    return (
        <div className='leader'>
            <p className='popular'>TEAM</p>
            <h1>Leadership</h1>

            <div className="cards">
                <div className="card">
                    <img width={330} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                    <h3>Leadership</h3>
                    <h4>CO-FOUNDER, PRESIDENT</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>

                <div className="card">
                    <img width={300} src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
                    <h3>Tom Sharp</h3>
                    <h4>CO-FOUNDER, COO</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>

                <div  className="card">
                    <img width={300} src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
                    <h3>Winston Hodson</h3>
                    <h4>MARKETING</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Leader