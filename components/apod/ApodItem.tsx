import Link from "next/link"

export interface Apod {
  copyright?: string,
  date: string,
  explanation: string,
  hdurl: string,
  media_type: string,
  service_version?: string,
  title: string,
  url: string,
  thumbnail_url: string,  
}
export interface IParams{
  apod: Apod  
  index: number
}

const ApodItem = ({apod, index}: IParams) => {
  const apodId = apod.date.slice(2).replace(/-/g, "")	
	const trim_explanation = (explanation: string) =>	explanation.length > 950 ? explanation.substring(0, 847) + "..." : explanation  
  return (
    <article className="bg-white shadow-xl flex h-[600px] m-16 overflow-hidden relative" key={apodId}>
      <figure className={`w-1/2 overflow-hidden p-0 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
				<img src={apod.media_type === "image" ? apod.url : apod.thumbnail_url} alt={apod.title} className="h-full ml-[-10%] w-[120%] max-w-none object-cover" />
				<figcaption className="-indent-96">{apod.title}</figcaption>
			</figure>
      <div className={`w-1/2 pl-12 pr-12 pt-12 ${index % 2 !== 0 ? 'order-1' : 'order-2'}`}>
				<h2 className="font-bold text-nasa-blue mb-4 hover:underline text-2xl">
          <Link href={`/apod/${apod.date}`} >
            <a>{apod.title}</a>
          </Link>
        </h2>				
				<p className="text-text-color text-base mb-4">
          {trim_explanation(apod.explanation)}
        </p>
				<div className="text-text-color flex">
					<p className="italic mb-4 mr-4">
            <label className="font-bold text-nasa-blue mr-1 not-italic">Date: </label>{ new Date(apod.date).toLocaleDateString() }
          </p>
					<p className="italic mb-4 mr-4">
            <label className="font-bold text-nasa-blue mr-1 not-italic">Media Type: </label>{apod.media_type}
          </p>
					<p className="italic mb-4">
            <label className="font-bold text-nasa-blue mr-1 not-italic">Copyright: </label>{apod.copyright ? apod.copyright : 'None'}
          </p>
				</div>				
			</div>
			<div className={`absolute bottom-0 ${index % 2 !== 0 ? 'left-0' : 'right-0'} `}>
				<a href={`https://apod.nasa.gov/apod/ap${apodId}.html`} className='py-4 px-8 mr-1 inline-block text-nasa-blue border-nasa-blue border-2 text-base font-bold uppercase hover:underline' target="_blank" rel="noreferrer">Go To APOD</a>
				<a href={apod.hdurl} className='py-4 px-8 inline-block text-white bg-nasa-blue text-base font-bold uppercase border-2 border-nasa-blue hover:underline' target="_blank" rel="noreferrer">Download</a>
			</div>
    </article>
  )
}

export default ApodItem