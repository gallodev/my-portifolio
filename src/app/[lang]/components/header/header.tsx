'use client'
import Image from 'next/image'

import "./header.scss"

interface HeaderProps {
    welcome: string,
    rule: string
}

export async function Header({ welcome , rule } : HeaderProps){

    return(
        <div className="header">
            <Image
                src="/assets/profile.jpg"
                alt="Profile picture"
                width={180}
                height={37}
                priority
            />
            <div>
                <h2>{welcome}</h2>
                <h3>{rule}</h3>
            </div>
        </div>
    )
}