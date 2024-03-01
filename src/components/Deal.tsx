import { card } from '../assets'
import { headingText, paragraphTextColor, textHeadingWhite } from '../styles'
import PrimaryButton from './PrimaryButton'

const Deal = () => {
    return (
        <div className='mb-[80px]'>
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-[100%] md:w-[45%]">
                    <div className="flex flex-wrap mt-6">
                        <div className="flex">
                            <h1 className={`${textHeadingWhite} ${headingText} font-medium`}>Find a better card deal in few easy steps.</h1>
                        </div>
                    </div>
                    <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <PrimaryButton btnText='Get Started' />
                </div>
                <div className="w-[100%] md:w-[50%]">
                    <img src={card} alt="billing" className="w-[90%] h-[90%]" />
                </div>
            </div>
        </div>
    )
}

export default Deal