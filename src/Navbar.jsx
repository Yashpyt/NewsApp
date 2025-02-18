import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-primary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/politics">Politics</Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link text-light" to="/crime">Crime</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
                <li><Link className="dropdown-item" to="/covid-19">Covid-19</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/jokes">Jokes</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav></>
    )
  }
}
