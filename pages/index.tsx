import type { NextPage, GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import ApodComponent from '../components/apod'
import Apods from '../components/apod/Apods'

export interface Props{
  apod: Apod
  apods: Apod[]
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

const Home: NextPage<Props> = ({apod, apods}: Props) => {
  
  return (
    <div>
      <Head>
        <title>APOD - Astronomy Picture of the day</title>
        <meta name="description" content="APOD - Astronomy Picture of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container mx-auto">
        <ApodComponent apod={apod} />
      </div>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NODE_ENV !== 'production'? 'DEMO_KEY' : process.env.REACT_APP_APOD_KEY}&thumbs=true`)
  const apod = request.data
  apod.apodDateId  = apod.date !== undefined ? apod.date.slice(2).replace(/-/g, "") : null
  
  return {
    props: {
      apod
    }
  }
}

export default Home
