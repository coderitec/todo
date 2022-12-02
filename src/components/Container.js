import React from 'react'
import Avatar from './Avatar'
import '../styles/Container.css'
import Info from './Info'
import Contact from './Contact'

export default function Container() {
  return (
    <section className='container'>
        <Avatar />
        <Info />
        <Contact />
    </section>
  )
}

