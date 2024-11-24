import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/aphelz.jpg' //'../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
        <div id='about' className="about-title">
            <h1>About me</h1>   
            <img src={theme_pattern} alt="" />
        </div> 
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="About Profile Photo" class="about-profile-photo" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I currently oversee a nationwide team of fourteen women, managing projects across various regions.       
                    </p>My role involves hands-on tasks like training early childhood development educators in Cape Town and data management.
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>ClickUP</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Microsoft Office Suite</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Facilitation</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Management</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Reporting & Analyisis</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Data Manipulation</p><hr style={{width:"50%"}} /></div>
                </div>
            </div> 
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
              <h1>20+</h1>
              <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
            <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
              </div> 
            </div>
  )
}

export default About;
