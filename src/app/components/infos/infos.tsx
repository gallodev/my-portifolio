import './infos.scss';
import { Title } from "../title/title";

export function Info(){
    return(
        <div className="info-container">
            <Title name="Languages"/>
            <div className="languages-info">
                <span>🇺🇸 EN - Mid level</span>
                <span>🇧🇷 PT-BR - Native Speaker</span>
            </div>
            <Title name="Education"/>
            <div className='education-info'>
                <span>🎓</span>
                <span>Full stack developer Degree - Faculdade impacta tecnologia</span>
            </div>
        </div>
    )
}