import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarker } from 'react-icons/fa';


const contactInformations = {
  email: 'skander_haj@hotmail.fr',
  phone: "+21698668889",
  address: {
    street: "route taniour km 7",
    city: 'sfax',
    country: 'Tunisie'

  }
}

function Contact() {
  return (

    <div className='container mt-5'>
      <div>
        < AiOutlineMail size={40} />
        <span style={{ marginLeft: 6 }}>{contactInformations.email}</span>
      </div>
      <div className='mt-3'>
        < BsFillPhoneFill size={40} />
        <span style={{ marginLeft: 6 }}>{contactInformations.phone}</span>
      </div>
      <div className='mt-3'>
        < FaMapMarker size={40} />
        <span style={{ marginLeft: 6 }}>{contactInformations.address.street},{contactInformations.address.city},{contactInformations.address.country}</span>
      </div>
    </div>
  )
}

export default Contact