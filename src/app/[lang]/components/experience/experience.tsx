import { Progress } from '../progress/progress'
import './experience.scss'

interface ExperienceProps {
    title: string,
    description: string,
    time: string
}

export function Experience({ title , description , time}: ExperienceProps){
    return(
        <div className="experience">
            <h2>{title}</h2>
            <span>{description}</span>
            <div className="progress-container">
                <Progress time={time} icon='/javascript.png' name='javascript' year={8}/>
                <Progress time={time} icon='/node.png' name='node' year={5}/>
                <Progress time={time} icon='/react.png' name='node' year={5}/>
                <Progress time={time} icon='/php.png' name='php' year={4}/>
                <Progress time={time} icon='/typescript.png' name='typescript' year={3}/>
                <Progress time={time} icon='/python.png' name='python' year={2}/>
            </div>
        </div>
    )
}