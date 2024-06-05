import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/CV.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Aloyo Job,</span> frontend developer based in Kenya.</h1>
        <p>I'm a frontend developer from Nirobi, Kenya with over 1 year of experience.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink  className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={cv} download='cv'>MY CV</a></div>
        </div>
    </div>
  )
}

export default Hero