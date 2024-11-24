import React from 'react'
import './Hero.css'
import profile_img from '../../assets/aphelz.jpg' //'../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className= 'hero'>
        <img src={profile_img} alt="Profile Photo" class="profile-photo" />
        <h1><span>I'm Aphelele Mapuko,</span> assessment coordinator and trainer based in SA.</h1>
        <p>I am a project coordinator/trainer from Cape Town, SA with 3 years experience in multiple projects, implementing and analyzing educational assessments. </p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
   </div>
  )
}

export default Hero;
