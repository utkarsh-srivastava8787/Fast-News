import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export class News extends Component {
    articles = []

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1
        }


    }

    async componentDidMount() {

        let url = `${this.props.category}&apiKey=72d0bc95e78747f2902410644fc2c099&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parshData = await data.json()
        this.setState({
            articles: parshData.articles,
            totalResults: parshData.totalResults,
            loading: false
        })

    }

    preHandler = async () => {
        let url = `${this.props.category}&apiKey=72d0bc95e78747f2902410644fc2c099&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parshData = await data.json()
        this.setState({
            articles: parshData.articles,
            loading: false,
            page: this.state.page - 1
        })
    }
    nextHandler = async () => {
        console.log(this.props)
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
            let url = `${this.props.category}&apiKey=72d0bc95e78747f2902410644fc2c099&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parshData = await data.json()
            console.log('next')
            this.setState({
                articles: parshData.articles || [],
                page: this.state.page + 1,
                loading: false
            })
        }
        else {
            console.log('hello')
        }

    }


    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>FastNews- Top Headlines</h1>
                <div className='row my-3' >
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className='col md-3 my-3' key={element.url}> <NewsItems title={element.title ? element.title.slice(0, 43) : ''} urlToImage={element.urlToImage} newUrl={element.url} description={element.description ? element.description.slice(0, 84) : ''} date={element.publishedAt} author={element.author} /></div>

                        )
                    })}
                </div>
                <div className="container my-3 d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.preHandler}>Previous</button>
                    <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)} onClick={this.nextHandler} >Next</button>
                </div>

            </div>
        )
    }
}

export default News