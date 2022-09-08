import React from 'react'
import Image from 'next/image'
export interface Params{
  hdurl: string,
  title: string,
  date: string
}
const ApodImage = ({hdurl, title, date}: Params) => {
  return (
    <figure className='max-w-5xl mx-auto mb-14'>
      <img src={hdurl} alt={title} />
      {/* <Image src={hdurl} layout="responsive"  alt={title} width="100%" height="100%" />  */}
      <figcaption className='text-text-color italic text-right text-xs'>
        {title} . Published: { new Date(date).toLocaleDateString() }
      </figcaption>
    </figure>
  )
}

export default ApodImage