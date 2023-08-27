import './infos.scss';
import { Title } from "../title/title";

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
        </div>
    )
}