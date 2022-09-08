import React from 'react'
export interface Params{
  title: string, 
  date: string, 
  url: string
}
const ApodVideo = ({title, date, url}: Params) => {
  return (
    <div className='iframe-wrapper'>
      <iframe width="1020" height="574" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p>{title} . Published: { new Date(date).toLocaleDateString() }</p>
    </div>
  )
}

export default ApodVideo