"use client";
import Image from 'next/image';

const Customcard = ({ image, content, className }) => {
    return (
        <div className={`p-4 lg:p-6 relative rounded-xl max-w-[450px] max-xs:max-w-[80%] w-full max-sm:w-full sm:max-w-[280px] md:max-w-[300px] max-h-[200px] min-h-[145px] md:min-h-[210px] lg:min-h-[190px] bg-primary-blue ${className}`}>
            <Image src={image} width={40} height={40} alt='icons' />
            <p className='text-white font-medium text-lg md:text-xl !leading-130 mt-3 md:mt-4 lg:mt-6'>{content}</p>
        </div>
    );
};

export default Customcard;
