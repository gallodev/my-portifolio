import Image from "next/image";
import './progress.scss'

interface ProgressProps {
    icon: string;
    name: string;
    year: number;
}

export function Progress({ name, year , icon} : ProgressProps){

    const progressClassName = 'progress-bar mesure-' + year

    return(        
        <div>
            <Image 
                src={icon}
                alt={name}
                width={36}
                height={30}
            />
            <div className="progress">
                <div className={progressClassName}><span>{year} years</span></div>
            </div>
        </div>
    )
}