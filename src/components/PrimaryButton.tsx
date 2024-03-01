import React from 'react'

type ButtonProps = {
    btnText: string;
    imageAlt?: string;
    image?: any;
}

const PrimaryButton: React.FC<ButtonProps> = ({ image, btnText, imageAlt }) => {
    return (
        <div>
            <button className={`button-secondary flex items-center transition-all text-black font-[500] mt-5 p-5 rounded-2xl px-8 duration-500 bg-gradient-to-tl to-[#33bbcf]/100 via-[#7de7eb]/60 from-[#def9fa]/100 bg-size-200 bg-pos-0 hover:bg-pos-100 text-[12px] sm:text-[16px]`}>{image && <img className='h-[15px] mr-4' src={image} alt={imageAlt}></img>} {btnText}</button>
        </div>
    )
}

export default PrimaryButton