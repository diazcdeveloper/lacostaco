'use client'

import Link from "next/link"
import './navbar.css'
import './responsiveNavbar.css'
import { useState } from "react"

export default function Navbar() {

  const [xClass, setXclass] = useState(false)


  const toggleXclass = () => {
    setXclass(!xClass);
  };

  const changeX = xClass ? 'menu close': 'menu';


  
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    setXclass(!xClass);
  }

  const openMenu = menu ? 'enlaces open' : 'enlaces';


  return (
    <nav className="navbar">
        <div className="logo"><Link href={"/"}><img src="logoNavbar3.jpeg" alt="" /></Link></div>
        <ul className={openMenu}>
            <li onClick={toggleMenu}><Link href={"/"}>HOME</Link></li>
            <li onClick={toggleMenu}><Link href={"/about"}>ABOUT</Link></li>
            <li onClick={toggleMenu}><Link href={"/support-and-partners"}>SUPPORT/PARTNERS</Link></li>
            <li onClick={toggleMenu}><Link href={"/ministries"}>MINISTRIES</Link></li>
            <li onClick={toggleMenu}><Link href={"/faqs"}>FAQs</Link></li>
            <li onClick={toggleMenu}><Link href={"/contact"}>CONTACT</Link></li>
        </ul>
        <Link className="btn_donation" href={"https://buy.stripe.com/eVacNFeLnb7saEo3cc"}>DONATION</Link>

        <div onClick={toggleMenu} className={changeX}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  )
}
