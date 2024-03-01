export const textHeadingBlack = "text-black";
export const textHeadingWhite = "text-white";
export const paragraphTextColor = "text-[#A09FA3] font-normal";
export const paragraphTextColorOnWhite = "text-[#7a7a7a] font-[400]";
export const lightTextColor = "text-[#B3B3B3]";
export const textSizeNormal = "text-[14px]";
export const container = '2xl:max-w-[1350px] xl:max-w-[1250px] lg:max-w-[1000px] xmd:max-w-[800px] md:max-w-[690px] sm:max-w-[510px] xs:max-w-[80%] mx-auto xs:max-w-none sm:max-w-none xmd:max-w-none md:max-w-none lg:max-w-screen-lg px-10';
export const navListItem = "block text-[12px] sm:text-[14px] border-b border-[#101010] py-3 px-5 font-medium w-[160px] sm:w-[210px] text-[#B3B3B3] hover:text-white hover:bg-primary-orange transition-all";
export const headingText = "text-[32px] sm:text-[42px] font-[500]";
export const subHeadingText = "text-[24px] sm:text-[32px]";

const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
