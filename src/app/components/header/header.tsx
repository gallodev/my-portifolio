import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <Image
                src="/profile.jpg"
                alt="Profile picture"
                width={180}
                height={37}
                priority
            />
            <div>
                <h2>{"Hi, i'm Christian! 👋"}</h2>
                <h3>Front end Developer</h3>
            </div>
        </div>
    )
}