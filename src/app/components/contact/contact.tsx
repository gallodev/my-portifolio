import { GithubIcon } from '../icons/githubIcon'
import { InstagramIcon } from '../icons/instagramIcon'
import { LinkedinIcon } from '../icons/linkedinIcon'
import { MailIcon } from '../icons/mailIcon'
import { TwitterIcon } from '../icons/twitterIcon'
import './contact.scss'
import Link from 'next/link'

export function Contact(){
    return(
        <div className="contact-info">
            <div className="social-networks">
                <div>
                    <Link href={'https://www.instagram.com/ak_gallo/'} target='_blank'><InstagramIcon/></Link>
                </div>
                <div>
                    <Link href={'https://www.linkedin.com/in/christian-gallo-b4291bb0/'} target='_blank'><LinkedinIcon/></Link>
                </div>
                <div>
                    <Link href={'https://github.com/gallodev'} target='_blank'><GithubIcon/></Link>
                </div>
                <div>
                    <Link href={'https://www.twitter.com/'} target='_blank'><TwitterIcon/></Link>
                </div>
            </div>
            <a className="contact-me-btn" href="mailto:contato.gallodev@gmail.com?subject=Contato pelo site&body=Contato enviado pelo portifolio">Contact me <MailIcon/></a>
        </div>
    )
}