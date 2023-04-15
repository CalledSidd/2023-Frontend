import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        console.log("Constructor from News")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a3552a1380e0414a838f59e113e352e6";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
    }

    render() {
        return (
        <div className='container my-3'>
            <h1>NewsApe Top Headlines</h1>
            <div className="row">
            {this.state.articles.map((element)=>{
                return <div key={element.url} className="col-md-4">
                    <NewsItem title = {element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
            </div>
        </div>
        )
    }
}

export default News