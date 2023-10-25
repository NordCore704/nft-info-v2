import React from 'react'

const Success = ({ setShowSuccess }) => {
    const handleClick = () => {
        setShowSuccess(false)
        document.body.classList.remove('overflow-hidden')
    }
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-scheme-darkerGrey opacity-85 z-30 gap-5 top-0 left-0 w-[100dvw] h-[100dvh]'>
        <div className="bg-scheme-grey p-3 opacity-95 rounded-md shadow-lg" >
    <p className='text-scheme-bgBlack'>Message sent successfully</p>
        </div>
        <button className="bg-gradient-to-tr from-gradients-greenOne to-gradients-greenTwo text-scheme-bgBlack  p-2 opacity-100 hover:from-gradients-greenThree hover:to-scheme-greenOne hover:text-white rounded-md" onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default Success