import React from 'react'
export interface Params{
  title: string, 
  date: string, 
  url: string
}
const ApodVideo = ({title, date, url}: Params) => {
  return (
    <div className='max-w-5xl mx-auto mb-14 text-center'>
      <iframe width="1020" height="574" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p className='text-text-color italic text-right text-xs max-w-4xl'>{title} . Published: { date.split('-').reverse().join('/') }</p>
    </div>
  )
}

export default ApodVideo