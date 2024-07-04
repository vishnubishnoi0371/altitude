"use client";
import React, { useEffect, useRef } from 'react';
import Customcard from './common/Customcard';
import { BlurLine } from './common/Icon';
import { gsap } from 'gsap';

const ProcessWork = () => {
    const steps = [
        { image: '/assets/image/svg/inspect-icon.svg', content: 'Inspect property for storm damage or quote preparation.' },
        { image: '/assets/image/svg/meet-icon.svg', content: 'Meet with claims adjuster if applicable' },
        { image: '/assets/image/svg/planing-icon.svg', content: 'Production Planning (permitting/scheduling)' },
        { image: '/assets/image/svg/construction-icon.svg', content: 'Estimate repair or replacement cost' },
        { image: '/assets/image/svg/necessary-icon.svg', content: 'Finalize necessary documentation' },
        { image: '/assets/image/svg/repair-icon.svg', content: 'Construction begins! (Most projects completed in 1 day!)' },
    ];

    const cardsRef = useRef([]);
    const circlesRef = useRef([]);
    const linesRef = useRef([]);

    useEffect(() => {
        gsap.set(cardsRef.current, { opacity: 0, y: 50 });
        gsap.set(circlesRef.current, { boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' });
        gsap.set(linesRef.current, { opacity: 0 });

        gsap.to(cardsRef.current, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1,
            repeat: -1,
            repeatDelay: 2,
            yoyo: true,
            ease: 'power1.inOut',
        });

        gsap.to(circlesRef.current, {
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
            stagger: 0.3,
            duration: 1,
            repeat: -1,
            repeatDelay: 2,
            yoyo: true,
            ease: 'power1.inOut',
        });

        gsap.to(linesRef.current, {
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            repeat: -1,
            repeatDelay: 2,
            yoyo: true,
            ease: 'power1.inOut',
        });
    }, []);

    return (
        <div className='bg-dark-blue py-10 sm:py-14 md:py-20 overflow-hidden lg:py-[130px]'>
            <h2 className='text-white font-bold text-center !leading-116 text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-14 lg:mb-[64px] animate-fadeIn'>Our Work Process</h2>
            <div className='max-w-[1194px] mx-auto px-3'>
                <div className='flex flex-col sm:flex-row relative justify-between md:flex-col gap-6 md:!gap-[60px]'>
                    <div className="flex flex-col max-sm:max-w-full md:flex-row gap-6 lg:gap-12 items-end md:items-center justify-start">
                        {steps.slice(0, 3).map((step, index) => (
                            <Customcard
                                key={index}
                                ref={el => cardsRef.current[index] = el}
                                image={step.image}
                                content={step.content}
                                className={`animate-shadowMove delay-${index * 300}`}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col absolute max-md:top-[2%] left-1 sm:left-[47%] md:left-6 gap-32 sm:gap-[44px] md:gap-[80px] lg:gap-[120px] md:flex-row md:relative items-center max-md:justify-between'>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className={`relative animate-shadowMove delay-${index * 300}`}>
                                <p ref={el => circlesRef.current[index] = el} className='text-white relative text-xl md:text-2xl z-20 font-semibold leading-125 text-center flex items-center justify-center bg-secondary-blue mb-0 rounded-full w-[42px] h-[42px] md:w-[54px] md:h-[54px]'>{index + 1}</p>
                                <span ref={el => linesRef.current[index] = el} className={`absolute hidden xxs:block rotate-90 md:rotate-0 top-0 ${index % 2 === 0 ? 'md:top-[-100%]' : 'md:top-[100%]'} max-md:${index % 2 === 0 ? '-rotate-90' : 'rotate-90'} left-[120%] md:left-[44%] animate-lineMove ${index === 0 || index === 2 || index === 4 ? 'sm:-rotate-90 sm:!left-[-25%] md:!left-[44%]' : ''}`}>
                                    <BlurLine />
                                </span>
                            </div>
                        ))}
                        <hr className='absolute top-[2%] border-t-0 md:[2px] h-[2px] md:top-7 w-[2px] left-[21px] sm:left-[20px] md:left-[25px] md:w-full !bg-[#313543] max-sm:min-h-[870px] max-md:min-h-[461px] max-sm:h-[97%] md:max-w-[700px] lg:max-w-[895px] xl:max-w-[880px] lg:w-full' />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-end md:items-center justify-end">
                        {steps.slice(3).map((step, index) => (
                            <Customcard
                                key={index + 3}
                                ref={el => cardsRef.current[index + 3] = el}
                                image={step.image}
                                content={step.content}
                                className={`animate-shadowMove delay-${index * 300}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessWork;
