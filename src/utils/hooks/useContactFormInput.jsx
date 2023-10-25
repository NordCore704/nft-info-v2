import React from 'react'
import { useState } from 'react'

const useContactFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleInputChange = (event) => {
      setValue(event.target.value)
    }
  return {
    value,
    handleInputChange,
  }
}

export default useContactFormInput