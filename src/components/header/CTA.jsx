import React from 'react'
import CV from '../../assets/Prasheel_Nandwana_Resume.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA