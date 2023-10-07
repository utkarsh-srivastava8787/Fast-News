import React, { Component } from 'react'
import News from './News'

export class Home extends Component {
    render() {
        return (
            <div>
                <News category='https://newsapi.org/v2/top-headlines?country=in' pageSize='6' />
            </div>
        )
    }
}

export default Home