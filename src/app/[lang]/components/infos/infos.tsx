import './infos.scss';
import { Title } from "../title/title";

interface IInfoProps {
    englishLevel: string
    portugueseLevel: string
    schoolDegree: string
}

export function Info({ englishLevel , portugueseLevel, schoolDegree} : IInfoProps){
    return(
        <div className="info-container">
            <Title name="Languages"/>
            <div className="languages-info">
                <span>🇺🇸 EN - {englishLevel}</span>
                <span>🇧🇷 PT-BR - {portugueseLevel}</span>
            </div>
            <Title name="Education"/>
            <div className='education-info'>
                <span>🎓</span>
                <span>{schoolDegree} - Faculdade impacta tecnologia</span>
            </div>
        </div>
    )
}