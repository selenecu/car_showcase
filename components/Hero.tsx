'use client'
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {

    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                Autos nuevos, Carros y Camionetas 4x4, Pick Up o SUV
                </h1>
                <p className="hero__subtitle">
                DESCUBRE NUESTROS MODELOS</p>
                <CustomButton 
                title='Solicitar Cotización'
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleScroll}/>
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image 
                    src="/hero.png"
                    alt="hero"
                    fill
                    className="object-contain"
                    />
                    <div className='hero__image-overlay'/>
                </div>
                </div>
        </div>
    )
}

export default Hero