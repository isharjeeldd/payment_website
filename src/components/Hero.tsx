import styles, { paragraphTextColor, textHeadingWhite } from "../styles"
import { discount, robot } from "../assets";
import { arrowUp } from "../assets";

const Hero = () => {

    const GetStarted = () => (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </div>

                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    );

    return (
        <section id="home" className={`flex md:flex-row flex-col mt-[100px] sm:mt-10 ${styles.paddingY}`}>
            <div className="flex items-center justify-between">
                <div className="w-[100%] sm:w-[50%]">
                    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 w-[100%] sm:w-[70%]">
                        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className="text-white">20%</span> Discount For
                            <span className="text-white"> 1 Month</span> Account
                        </p>
                    </div>
                    <div className="flex flex-wrap mt-6">
                        <div className="flex">
                            <h1 className={`${textHeadingWhite} text-[32px] sm:text-[64px] font-medium`}>The Next <span className="text-gradient">Generation</span>
                            </h1>
                            <div className="md:flex flex-start hidden md:mr-4 mr-0">
                                <GetStarted />
                            </div>
                        </div>
                        <h1 className={`${textHeadingWhite} text-[32px] sm:text-[64px] font-medium`}>Payment Method</h1>
                    </div>
                    <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                </div>
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                    <img src={robot} alt="billing" className="w-[90%] right-0 h-[90%] relative z-[5]" />

                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>
                {/* <div className={`sm:hidden ${styles.flexCenter}`}>
                    <GetStarted />
                </div> */}
            </div>

        </section>
    )
}

export default Hero