import React, { Component } from 'react'
import News from './News'

export class Entertainment extends Component {
    render() {
        return (
            <div>

                <News category='https://newsapi.org/v2/top-headlines?category=Entertainment&country=in' pageSize='6' />
            </div>
        )
    }
}

export default Entertainment