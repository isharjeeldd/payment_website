import { features } from '../constants';
import styles, { headingText, layout, paragraphTextColor, textHeadingWhite } from '../styles'
import PrimaryButton from './PrimaryButton'

type CardProps = {
    icon: any;
    title: string;
    content: string;
    index: number;
}

const Business = () => {

    const FeatureCard: React.FC<CardProps> = ({ icon, title, content, index }) => (
        <div className={`flex flex-row p-6 rounded-[20px] transition duration-300 ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                    {title}
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {content}
                </p>
            </div>
        </div>
    );

    return (
        <div className='mt-[80px]' id='features'>
            <div className="flex flex-wrap items-center">
                <div className="w-[100%] md:w-[50%]">
                    <div className="flex flex-wrap mt-6">
                        <div className="flex">
                            <h1 className={`${textHeadingWhite} ${headingText} font-medium`}>You do the business, we’ll handle the money.</h1>
                        </div>
                    </div>
                    <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <PrimaryButton btnText='Get Started' />
                </div>
                <div className="w-[100%] md:w-[50%]">
                    <div className={`${layout.sectionImg} flex-col transition duration-300`}>
                        {features.map((feature, index) => (
                            <FeatureCard key={feature.id} {...feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business