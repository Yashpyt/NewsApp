import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home q="All" />} />
            <Route path='/politics' element={<Home q="Politics" />} />
            <Route path='/crime' element={<Home q="Crime" />} />
            <Route path='/education' element={<Home q="Education" />} />
            <Route path='/entertainment' element={<Home q="Entertainment" />} />
            <Route path='/science' element={<Home q="Science" />} />
            <Route path='/technology' element={<Home q="Technology" />} />
            <Route path='/sports' element={<Home q="Sports" />} />
            <Route path='/cricket' element={<Home q="Cricket" />} />
            <Route path='/covid-19' element={<Home q="Covid-19" />} />
            <Route path='/jokes' element={<Home q="Jokes" />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    )
  }
}
