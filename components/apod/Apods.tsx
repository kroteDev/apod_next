
import ApodItem from "./ApodItem"
import { Apod } from "@types"

export interface Props{
  apods: Apod[]  
}

const Apods = ({apods}: Props): JSX.Element => {
  if (!apods){
    return(      
      <h1 className='text-2xl text-green-500 font-bold'>Carregando...</h1>      
    )
  }
  return (
    <div>
      {apods.map( (apod, index) => (
				<ApodItem key={index} apod={apod} index={index} />
			))}      
    </div>
  )
}

export default Apods