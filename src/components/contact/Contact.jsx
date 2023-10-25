import React from 'react'
import { ContactText, ContactForm, ContactAvatar } from '@/exports'

const Contact = () => {
  return (
    <div className='py-5 min-h-screen px-5 w-full flex items-center justify-center gap-2 flex-col'>
       <ContactText />
       <ContactForm />
       <ContactAvatar />
    </div>
  )
}

export default Contact