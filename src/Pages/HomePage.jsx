import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import MainAbout from '../components/MainAbout/MainAbout'
import MainService from '../components/MainService/MainService'
import ChooseUs from '../components/ChooseUs/ChooseUs'

function HomePage() {
  return (
    <>
    <Header/>
    <Main/>
    <MainAbout/>
    <MainService/>
    <ChooseUs/>
    </>
  )
}

export default HomePage