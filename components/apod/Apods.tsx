
import ApodItem from "./ApodItem"

export interface Apod {
  copyright?: string,
  date: string,
  explanation: string,
  hdurl: string,
  media_type: string,
  service_version?: string,
  title: string,
  url: string,
  thumbnail_url: string  
}
export interface Props{
  apods: Apod[]  
}

const Apods = ({apods}: Props): JSX.Element => {
  return (
    <div>
      {apods.map( (apod, index) => (
				<ApodItem key={index} apod={apod} index={index} />        
			))}      
    </div>
  )
}

export default Apods