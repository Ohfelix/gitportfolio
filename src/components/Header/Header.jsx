    /*       <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <img className='w-30 mb-0' src={logoImg} alt="" />
          </motion.div> */
import { useEffect, useRef } from 'react'
import logoImg from '../../assets/images/logobg.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { motion } from "framer-motion"

const navLinks = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/contact',
    display: "Contact"
  },
  {
    path: '/services',
    display: "Projetos"
  },
  {
    path: '/manager',
    display: "Clientes"
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return <header className='header flex items-center' ref={headerRef}>
    <div className='container'>
      <div className='flex items-center justify-between '>
        <div>
        </div>
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
          <ul className='menu flex items-center gap-[2.7rem]'>
            {
              navLinks.map((link, index) => <li key={index}>
                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leanding-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
              </li>)
            }
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <Link to='/'>
            </Link>
          </div>
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>
      </div>
    </div>
  </header>
}

export default Header