import './title.scss'

interface TitleProps {
    name: string
}

export function Title({ name } : TitleProps){
    return(
        <h3>{name}</h3>
    )
}