import { Contact } from './components/contact/contact'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/infos/infos'
import { Params } from './layout'
import { useTranslation } from '../i18n'

import './styles/home.scss'


export default async function Home({ params: { lang }} : { params: Params}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="container">
      <Header welcome={t('header.welcome')} rule={t('header.rule')} />
      <Experience title={t('experience.title')} description={t('experience.description')} time={t('experience.time')}/>      
      <Info englishLevel={t('infos.englishLevel')} portugueseLevel={t('infos.portugueseLevel')} schoolDegree={t('infos.schoolDegree')} />
      <Contact contact={t('contact.contact')} />
    </main>
  )
}
