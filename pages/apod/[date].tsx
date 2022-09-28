import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import axios from 'axios'
import  ApodComponent  from '../../components/apod/'
import Head from 'next/head'
import { Apod } from '@types'

interface IParams extends ParsedUrlQuery {
  date: string
}
export interface Props{
  apod: Apod  
}

const apod: NextPage<Props> = ({apod}: Props) => {
  
  return (
    <>
      <Head>
        <title>APOD - Astronomy Picture of the day.{apod.title}</title>
        <meta name="description"          content={apod.explanation} />
        <meta property="og:url"           content={`/apod/${apod.date}`} />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content={`APOD - Astronomy Picture of the day.${apod.title}`} />
        <meta property="og:description"   content={apod.explanation} />
        <meta property="og:image"              content={apod.hdurl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApodComponent apod={apod} />
    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({...ctx}) => {  
  
  const { date } = ctx.params as IParams  
  
  if(!date ){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NODE_ENV !== 'production'? 'DEMO_KEY' : process.env.API_KEY}&date=${date}&thumbs=true`)
  const apod = request.data
  apod.apodDateId  = apod.date !== undefined ? apod.date.slice(2).replace(/-/g, "") : null  

  return {
    props: {
     apod
    },
  }
}

export default apod