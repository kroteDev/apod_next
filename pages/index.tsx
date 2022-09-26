import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import ApodComponent from '../components/apod'
import Apods from '../components/apod/Apods'

const Home: NextPage = ({ apod, apods }: any) => {
  return (
    <div>
      <Head>
        <title>APOD - Astronomy Picture of the day</title>
        <meta name="description" content="APOD - Astronomy Picture of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container mx-auto">
        <ApodComponent apod={apod} />
        <header className='text-nasa-blue my-24 font-bold text-7xl'>
          <h2>One of these days</h2>
        </header>
        <Apods apods={apods}/>
      </div>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {  
  //Get the APOD of the day  
  const req1 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NODE_ENV !== 'production' ? 'DEMO_KEY' : process.env.API_KEY}&thumbs=true`)
  const apod = req1.data
  apod.apodDateId  = apod.date !== undefined ? apod.date.slice(2).replace(/-/g, "") : null  

  //Get a list of 10 apods random
  const req2 = await axios.get(`https://api.nasa.gov/planetary/apod?count=10&thumbs=true&api_key=${process.env.NODE_ENV !== 'production'? 'DEMO_KEY' : process.env.API_KEY}`)
  const apods = req2.data
  return {
    props: {
     apod,
     apods
    },
  }
}

export default Home
