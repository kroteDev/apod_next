import React, { ReactNode } from 'react'

import Header from "./Header"
import Footer from "./Footer"
type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return(
    <>
    <Header />    
    { children }
    <Footer />
   </>
  )
}

export default Layout