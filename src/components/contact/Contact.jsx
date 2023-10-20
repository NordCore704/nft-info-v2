import React from 'react'
import { ContactText, ContactForm, ContactAvatar } from '@/exports'

const Contact = () => {
  return (
    <div className='py-5 px-5 w-full flex items-center gap-2 flex-col'>
       <ContactText />
       <ContactForm />
       <ContactAvatar />
    </div>
  )
}

export default Contact