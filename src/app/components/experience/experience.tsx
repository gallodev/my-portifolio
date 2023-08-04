import { Progress } from '../progress/progress'
import './experience.scss'

export function Experience(){
    return(
        <div className="experience">
            <h2>Experience</h2>
            <span>12 years working as a Software Developer, in companys such as Claro, Dasa and Hubla.</span>
            <div className="progress-container">
                <Progress icon='/javascript.png' name='javascript' year={8}/>
                <Progress icon='/node.png' name='node' year={5}/>
                <Progress icon='/react.png' name='node' year={5}/>
                <Progress icon='/php.png' name='php' year={4}/>
                <Progress icon='/typescript.png' name='typescript' year={3}/>
                <Progress icon='/python.png' name='python' year={2}/>
            </div>
        </div>
    )
}