import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import axios from 'axios'
import  ApodComponent  from '../../components/apod/'
import Head from 'next/head'

interface IParams extends ParsedUrlQuery {
  date: string
}
export interface Props{
  apod: Apod  
}

export interface Apod {
  copyright?: string,
  date: string,
  explanation?: string,
  hdurl: string,
  media_type?: string,
  service_version?: string,
  title: string,
  url: string,
  apodDateId: string
}

const apod = ({apod}: Props) => {  
  return (
    <>
      <Head>
        <title>APOD - {apod.title}</title>
        <meta name="description" content={apod.explanation} />        
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
  
  const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NODE_ENV !== 'production'? 'DEMO_KEY' : process.env.REACT_APP_APOD_KEY}&date=${date}&thumbs=true`) 

  const apod = request.data
  apod.apodDateId  = apod.date !== undefined ? apod.date.slice(2).replace(/-/g, "") : null  

  return {
    props: {
     apod
    },
  }
}

export default apod