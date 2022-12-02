import React from 'react'

export default function Info() {
    let name = 'Chydynma Paul'
    let grade = 'Class 6'
    let gender = 'female'
    let state = 'Imo'
  return (
    <section>
        <ul className='info'>
            <li>Full Name: {name}</li>
            <li>CLass: {grade}</li>
            <li>Gender: {gender}</li>
            <li>State: {state}</li>
        </ul>
    </section>
  )
}
