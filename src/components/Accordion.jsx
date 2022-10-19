import React from 'react'

const Accordion = ({ question, answer, currentIndex, index, setCurrentIndex }) => {


  return (
    <article
    onClick={() => setCurrentIndex(index)}
    className={`${ currentIndex !== index ? `bg-[#F6F7F9]`: `bg-[#EBF3FF]` } border border-[#E1E7EC] mb-3 min-h-[50px] px-4 py-3 rounded cursor-pointer transition-all duration-300 ease-in-out`}>
        <p className='font-medium'>{question}</p>
        <span className={`${ currentIndex === index ? `block`: `hidden` } py-4 text-sm text-[#4F5D6D]`}>{answer}</span>
    </article>
  )
}

export default Accordion
