import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

const inter = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Portifolio de Christian Gallo',
  description: 'Portifolio de desenvolvedor full stack react, typescript, node, python',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export interface Params {  
  lang : string
}

export default function RootLayout({
  children,
  params: {lang}
}: {
  children: React.ReactNode
  params: Params
}) {
  
  return (
    <html lang={lang} dir={dir(lang)}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
