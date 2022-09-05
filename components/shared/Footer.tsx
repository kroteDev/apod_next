import Link from 'next/link'
import Image from 'next/image'
import nasaworm from '../../public/imgs/nasaworm.png'
const Footer = () => {
  return (
    <footer className='flex flex-wrap bg-gradient-to-b from-gradient-start to-gradient-end pt-8 pb-5 mt-28 text-white'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className='w-1/3 px-3'>
            <Image src={nasaworm} layout='intrinsic' width={288} height={80} />
          </div>
          <div className='w-1/3 px-3'>
            <h2 className='font-bold text-lg mb-5'>Follow me</h2>
            <ul>
              <li className='mb-3'>
                <a href="https://www.facebook.com/krotedev" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li className='mb-3'>
                <a href="https://www.instagram.com/krotedev/" target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li className='mb-3'>
                <a href="https://www.linkedin.com/in/bolliveira/" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className='w-1/3 px-3'>
            <h2 className='font-bold text-lg mb-5'>More About NASA</h2>
            <ul>
              <li className='mb-3'>
                <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">NASA</a>
              </li>
              <li className='mb-3'>
                <a href="https://apod.nasa.gov/apod/" target="_blank" rel="noreferrer">APOD</a>
              </li>
              <li className='mb-3'>
                <a href="https://www.nasa.gov/offices/odeo/no-fear-act" target="_blank" rel="noreferrer">No Fear Act</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 text-sm">Made with love by <a href="https://www.krotedev.com.br" target="_blank" rel="noreferrer" className='text-nasa-worm'>KröteDev</a></div>
      </div>
    </footer>
  )
}

export default Footer