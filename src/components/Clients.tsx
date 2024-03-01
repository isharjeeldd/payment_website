import { subHeadingText } from "../styles"

const Clients = () => {
    return (
        <section className="my-6">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-between items-center">
                    <h2 className={`${subHeadingText} text-white my-4`}>
                        <b>3800+</b> <span className="text-gradient text-[24px] sm:text-[24px]">&nbsp;&nbsp;USERS ACTIVE</span>
                    </h2>
                </div>
                <span className="text-white hidden md:block">|</span>
                <div className="flex justify-between items-center my-4">
                    <h2 className={`${subHeadingText} text-white m-0`}>
                        <b>230+</b> <span className="text-gradient text-[24px] sm:text-[24px]">&nbsp;&nbsp;TRUSTED BY COMPANY</span>
                    </h2>
                </div>
                <span className="text-white hidden md:block">|</span>
                <div className="flex justify-between items-center my-4">
                    <h2 className={`${subHeadingText} text-white m-0`}>
                        <b>$230M+</b> <span className="text-gradient text-[24px] sm:text-[24px]">&nbsp;&nbsp;TRANSACTION</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Clients