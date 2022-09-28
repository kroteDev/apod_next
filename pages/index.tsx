import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import ApodComponent from '../components/apod'
import Apods from '../components/apod/Apods'
import { Apod } from '@types'
import { useRouter } from 'next/router'


export interface Props{
  apod: Apod
  apods: Apod[]
}

const Home: NextPage<Props> = ({apod, apods}: Props) => {  
  const router = useRouter()  
  return (
    <div>
      <Head>
        <title>APOD - Astronomy Picture of the day.{apod.title}</title>
        <meta name="description"          content={`Today: ${apod.explanation}`} />
        <meta property="og:url"           content={router.pathname} />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content={`APOD - Astronomy Picture of the day.Today: ${apod.title}`} />
        <meta property="og:description"   content={`Today: ${apod.explanation}`} />
        <meta property="og:image"         content={apod.media_type === "image" ? apod.hdurl : apod.thumbnail_url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <div className="container mx-auto">
        <ApodComponent apod={apod} />
        <Apods apods={apods} />
      </div>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  //one apod
  const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NODE_ENV !== 'production'? 'DEMO_KEY' : process.env.API_KEY}&thumbs=true`)
  const apod = request.data
  apod.apodDateId  = apod.date !== undefined ? apod.date.slice(2).replace(/-/g, "") : null
  
  // 10 apods
  const req2 = await axios.get(`https://api.nasa.gov/planetary/apod?count=10&thumbs=true&api_key=${process.env.NODE_ENV !== 'production'? 'DEMO_KEY' : process.env.API_KEY}`)
  const apods = req2.data
 
  return {
    props: {
      apod,
      apods
    }
  }
}

export default Home
