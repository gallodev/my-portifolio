import './infos.scss';
import { Title } from "../title/title";
import Link from 'next/link'

interface IInfoProps {
    title: string
    subtitle: string
    englishLevel: string
    portugueseLevel: string
    schoolDegree: string
}

export function Info({ title, subtitle, englishLevel , portugueseLevel, schoolDegree} : IInfoProps){
    return(
        <div className="info-container">
            <Title name={title}/>
            <div className="languages-info">
                <span>🇺🇸 EN - {englishLevel}</span>
                <span>🇧🇷 PT-BR - {portugueseLevel}</span>
            </div>
            <Title name={subtitle}/>
            <div className='education-info'>
                <span>🎓</span>
                <span>{schoolDegree} - Faculdade impacta tecnologia</span>
            </div>
            <div className='translate-info'>
                <div className="translate-btn">
                    <Link href={'/pt'} locale="pt">PT</Link>
                    <Link href={'/en'} locale="en">EN</Link>
                </div>
            </div>
        </div>
    )
}