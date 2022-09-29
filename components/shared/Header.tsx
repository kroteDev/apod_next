import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className=' bg-nasa-blue text-white mb-28 shadow-md px-3 py-2 border-b-4 border-border-nav'>
      <div className="container flex flex-wrap justify-between ">
        <div className="logo">
          <h1>
            <Link href="/">              
              <a className='inline-block'><img src="/imgs/apodlogo.png" alt="kroteDev Apod" width={150} height={83} /></a>
            </Link>
          </h1>
        </div>
        <div className="nav w-fit flex items-center">
          <ul className=' flex flex-wrap'>
            <li>
              <a className='nav-item' target="_blank" href='https://nasa.gov/' rel="noreferrer">Nasa</a>          
            </li>
            <li>
              <a className='nav-item' target="_blank" href='https://apod.nasa.gov/apod' rel="noreferrer">APOD official site</a>          
            </li>
            <li>
              <Link href="/about">
                <a className='nav-item'>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header