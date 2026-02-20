import AnimatedCards from './AnimatedCards';

export default function AnimatedCardsTab(){
    return (
        <div className="flex flex-wrap w-8/10 gap-10 mt-10 mb-10 m-auto">
            <div className="inline-block overflow-hidden h-[563.36px] w-133.5">
                <AnimatedCards image="hoodies.webp" name="Hoodies" h={563.36} w={534}/>
            </div>
            <div className="inline-block w-134">
                <AnimatedCards image="beanie.webp" name="Beanies for Men & Women" h={267} w={534}/>
                <AnimatedCards image="glasses.webp" name="Glasses" h={267} w={534}/>
            </div>
        </div>
    );
}