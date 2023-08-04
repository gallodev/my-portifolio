import { Contact } from './components/contact/contact'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/infos/infos'
import './styles/home.scss'



export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>      
      <Info/>
      <Contact/>
    </main>
  )
}
