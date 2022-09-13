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
      <img src={hdurl} alt={title} className='w-full h-auto'/>      
      <figcaption className='text-text-color italic text-right text-xs p-0.5'>
        {title} . Published: { date.split('-').reverse().join('/') }
      </figcaption>
    </figure>
  )
}

export default ApodImage