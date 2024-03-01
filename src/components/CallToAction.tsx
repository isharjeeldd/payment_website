import { headingText, paragraphTextColor, textHeadingWhite } from "../styles"
import PrimaryButton from "./PrimaryButton"

const CallToAction = () => {
    return (
        <div className="card rounded-2xl bg-gray-gradient w-[100%] flex flex-wrap items-center justify-between p-[40px] md:p-[90px] my-6">
            <div className="w-[100%] lg:w-[55%]">
                <h1 className={`${textHeadingWhite} ${headingText} text-start`}>Let’s try our service now!</h1>
                <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className='flex flex-wrap gap-5 w-[100%] lg:w-[30%] mt-10 lg:mt-0 items-center justify-start lg:justify-between '>
                <PrimaryButton btnText="Get Started" />
            </div>
        </div>
    )
}

export default CallToAction