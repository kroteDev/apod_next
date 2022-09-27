
import ApodImage from './ApodImage'
import ApodVideo from './ApodVideo'

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

const ApodComponent = ({apod}: Props): JSX.Element => {
  return (
    <div className='container content-wrapper py-14 px-4'>
      {apod.media_type === "image" ?(
        <ApodImage hdurl={apod.hdurl} title={apod.title} date={apod.date}  />
      ) : (
        <ApodVideo title={apod.title} date={apod.date} url={apod.url} />
      )
      }
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-5">
          {apod.title}
        </h1>
        <p className="text-text-color text-base font-normal mb-8">
          {apod.explanation}
        </p>
        <div className="flex flex-wrap">
          <p className='my-4 mr-8 text-base font-normal italic text-text-color'>
            <label className='mr-1 text-nasa-blue font-bold not-italic'>Date: </label>{ apod.date.split('-').reverse().join('/') }
          </p>          
          <p className='my-4 mr-8 text-base font-normal italic text-text-color'>
            <label className='mr-1 text-nasa-blue font-bold not-italic'>Media Type: </label>{apod.media_type}
          </p>          
          {apod.copyright && 
            <p className='my-4 mr-8 text-base font-normal italic text-text-color'>
              <label className='mr-1 text-nasa-blue font-bold not-italic'>Copyright: </label>{apod.copyright}
            </p>
          }
        </div>
        <div className="text-right">
          <a href={`https://apod.nasa.gov/apod/ap${apod.apodDateId}.html`} className="py-4 px-8 mr-1 inline-block text-nasa-blue border-nasa-blue border-2 text-base font-bold uppercase hover:underline" target="_blank" rel="noreferrer" >Go To APOD</a>
          <a href={apod.hdurl} className="py-4 px-8 inline-block text-white bg-nasa-blue text-base font-bold uppercase border-2 border-nasa-blue hover:underline" target="_blank" rel="noreferrer">Download</a>
        </div>
      </div>
    </div>
  )
}

export default ApodComponent