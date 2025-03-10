import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import MainAbout from '../components/MainAbout/MainAbout'
import MainService from '../components/MainService/MainService'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import Footer from '../components/Footer/Footer'
import Start from '../components/Start/Start'
import Pricing from '../components/Pricing/Pricing'

function HomePage() {
  return (
    <>
    <Header/>
    <Main/>
    <MainAbout/>
    <MainService/>
    <ChooseUs/>
    <Start/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default HomePage