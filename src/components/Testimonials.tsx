import { quotes } from '../assets';
import { feedback } from '../constants';
import { headingText, paragraphTextColor, textHeadingWhite } from '../styles'

type TestimonialProps = {
    content: string;
    name: string;
    title: string;
    img: any;
}

const Testimonials = () => {
    const Testies: React.FC<TestimonialProps> = ({ content, name, title, img }) => (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card transition-all ease-in-out duration-300">
            <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
                {content}
            </p>

            <div className="flex flex-row">
                <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                        {name}
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
    return (
        <div id='clients'>
            <div className="flex flex-wrap items-center">
                <div className="w-[100%] md:w-[50%]">
                    <div className="flex flex-wrap mt-6">
                        <div className="flex">
                            <h1 className={`${textHeadingWhite} ${headingText} font-medium`}>What people are saying about us</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[50%]">
                    <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container transition-all ease-in-out duration-300 relative z-[1]">
                {feedback.map((card) => <Testies key={card.id} {...card} />)}
            </div>
        </div>
    )
}

export default Testimonials