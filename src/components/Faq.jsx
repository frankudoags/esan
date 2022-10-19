import React, { useState } from 'react'
import Accordion from './Accordion'
import { ImgRef } from "../assets/index"

const Faq = () => {
    const [currentIndex, setCurrentIndex] = useState();
    return (
        <section className='flex flex-col w-[95%] lg:w-[80%] my-16 mx-auto bg-white pb-12'>
            <h1 className='text-[24px] my-16 pl-[91px] font-semibold'>Frequently Asked Questions</h1>

            <div className='flex flex-col-reverse lg:flex-row items-center justify-center w-full px-6 lg:px-12 gap-12'>
                {/* Accordions */}
                <div className='w-full lg:w-1/2'>
                    {AccordionData.map(({ question, answer }, index) => (
                        <Accordion
                            question={question}
                            answer={answer}
                            index={index}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                            key={index}
                        />
                    ))}
                </div>
                {/* Image */}
                <div className='w-full lg:w-1/2 h-full'>
                    <img src={ImgRef} alt="" className='w-full lg:h-full' />
                </div>
            </div>
        </section>
    )
}

export default Faq


const AccordionData = [
    {
        question: "How does Cova transfer my portfolio information to my beneficiary?",
        answer: "If you stop being active on Cova. Cova will send emails to remind you to click a link as proof of life. If you don’t click the proof of life link after a certain number of days, Cova will email a Zip folder containing your Cova portfolio information to your beneficiary. You can set your transfer protocol and the number of active days required."
    },
    {
        question: "How does Cova transfer my portfolio information to my beneficiary?",
        answer: "If you stop being active on Cova. Cova will send emails to remind you to click a link as proof of life. If you don’t click the proof of life link after a certain number of days, Cova will email a Zip folder containing your Cova portfolio information to your beneficiary. You can set your transfer protocol and the number of active days required."
    },
    {
        question: "How does Cova transfer my portfolio information to my beneficiary?",
        answer: "If you stop being active on Cova. Cova will send emails to remind you to click a link as proof of life. If you don’t click the proof of life link after a certain number of days, Cova will email a Zip folder containing your Cova portfolio information to your beneficiary. You can set your transfer protocol and the number of active days required."
    },
    {
        question: "How does Cova transfer my portfolio information to my beneficiary?",
        answer: "If you stop being active on Cova. Cova will send emails to remind you to click a link as proof of life. If you don’t click the proof of life link after a certain number of days, Cova will email a Zip folder containing your Cova portfolio information to your beneficiary. You can set your transfer protocol and the number of active days required."
    },
    {
        question: "How does Cova transfer my portfolio information to my beneficiary?",
        answer: "If you stop being active on Cova. Cova will send emails to remind you to click a link as proof of life. If you don’t click the proof of life link after a certain number of days, Cova will email a Zip folder containing your Cova portfolio information to your beneficiary. You can set your transfer protocol and the number of active days required."
    },
]