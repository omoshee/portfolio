import React, { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const menuRef=useRef()
  const openMenu=()=>{
    menuRef.current.style.width='280px'
  }
  const closeMenu=()=>{
    menuRef.current.style.width='0px'
  }
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <div className="mylogo">
        <h1>Aloyo</h1>
        <img src={theme_pattern} alt="" className='theme-pattern'/>
        </div>
        <img src={menu_open} alt="" onClick={openMenu} ref={menuRef} className='nav-mob-open' />

        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
          <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"? <img src={nav_underline} alt="" />:<></>}</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"? <img src={nav_underline} alt="" />:<></>}</AnchorLink></li>
          {/* <li>Services</li> */}
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p>{menu==="portfolio"? <img src={nav_underline} alt="" />:<></>}</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"? <img src={nav_underline} alt="" />:<></>}</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar