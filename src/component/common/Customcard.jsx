"use client";
import React, { forwardRef } from 'react';
import Image from 'next/image';

const Customcard = forwardRef(({ image, content, className }, ref) => {
    return (
        <div ref={ref} className={`p-4 lg:p-6 relative rounded-xl max-w-[450px]  max-xs:max-w-[80%]  transition-all duration-300 ease-linear hover:shadow-[0px_0px_16px_0px] hover:shadow-white/50 w-full max-sm:w-full sm:max-w-[280px] md:max-w-[300px] max-h-[200px] min-h-[145px] md:min-h-[210px] lg:min-h-[190px] bg-primary-blue ${className}`}>
            <Image src={image} width={40} height={40} alt='icons' />
            <p className='text-white font-medium text-lg md:text-xl !leading-130 mt-3 md:mt-4 lg:mt-6'>{content}</p>
        </div>
    );
});

export default Customcard;
