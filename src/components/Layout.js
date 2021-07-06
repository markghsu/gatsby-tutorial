import * as React from 'react'
import { Link } from 'gatsby'
import { mainNav, container, title } from './layout.module.css'

const Layout = ({ pageTitle, children}) => (
    <>
        <nav className={ mainNav }>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
        <main className={ container }>
            <h1 className={ title } >{ pageTitle }</h1>
            {children}
        </main>
    </>
)

export default Layout