import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      articles:[],
      totalResults:0
    }
  }
  async getApiData(){
    var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&sortBy=publishedAt&language=hi&apiKey=4914e19f96b24c87990d660cade7187b`)
    response = await response.json()
    this.setState({
      articles:response.articles,
      totalResults:response.totalResults
    })
    
  }
  componentDidMount(){
    this.getApiData()
  }
  componentDidUpdate(old){
    if(this.props!==old)
    this.getApiData()

  }
  render() {
    return (
      <>
         <h5 className='bg-primary text-light text-center p-2 my-1'>{this.props.q} News Articles</h5> 
         <div className="container">
          <div className="row">
            {this.state.articles.map((item,index)=>{
              return <NewsItem
                    key={index}
                    pic={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    date={item.publishedAt}
                    source={item.source.name}

              />
            })}
          </div>
         </div>
      </>
    )
  }
}
