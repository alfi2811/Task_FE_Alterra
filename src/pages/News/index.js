import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_news } from '../../redux/actions/news'
import Navbar from '../../component/Navbar'
import './style.scss'

const News = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_news())
  }, [dispatch])  

  const dateDiff = (datePublish) => {
    let dtnow = new Date(Date.now())
    let newd = new Date(datePublish)    
    const diffHours = Math.ceil(Math.abs(dtnow - newd) / (1000 * 60 * 60));     
    if(diffHours >= 24) {
      return Math.ceil(diffHours/24) + " days"
    }     
    return diffHours + " hours"
  }

  const articles = useSelector(state => state.news.listArticles)
  return (
    <div className="p-news">   
      <Navbar />   
      <div className="p-news__body">
        <div className="p-news__body-jumbotron">
          <img src="" alt="" />
        </div>
        <div className="p-news__body-content">
          <h1 className="p-news__body-content-title">Latest News</h1>
          <div className="p-news__body-content-list">
            {
              articles?.map((article, key) => (
              <div className="p-news__body-content-list-post" key={key}>
                <div className="p-news__body-content-list-post-thumbnail">
                  <img src="https://placeimg.com/150/100/tech" alt="" />
                </div>
                <div className="p-news__body-content-list-post-caption">
                  <h3>{article.title}</h3>
                  <p>
                    { article.description } 
                    .. <a href={article.url} rel="noreferrer" target="_blank">Read More</a> 
                  </p>
                  <div className="p-news__body-content-list-post-caption-author">
                    <span className="name">{article.source}</span>
                    <span>{dateDiff(article.published_at)} ago</span>
                  </div>
                </div>
              </div>            
              ))
            }
          </div>
        </div>        
      </div>
    </div>
  )
}

export default News
