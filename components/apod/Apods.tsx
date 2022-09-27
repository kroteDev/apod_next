
import ApodItem from "./ApodItem"
import { Apod } from "@types"

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