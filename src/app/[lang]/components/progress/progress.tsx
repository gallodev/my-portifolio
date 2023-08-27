import Image from "next/image";
import './progress.scss'

interface ProgressProps {
    icon: string;
    name: string;
    year: number;
    time: string
}

export function Progress({ name, year , icon, time} : ProgressProps){

    const progressClassName = 'progress-bar mesure-' + year

    return(        
        <div>
            <Image 
                src={icon}
                alt={name}
                width={36}
                height={30}
                priority
            />
            <div className="progress">
                <div className={progressClassName}><span>{year} {time}</span></div>
            </div>
        </div>
    )
}