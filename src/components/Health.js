import React, { Component } from 'react'
import News from './News'

export class Health extends Component {
    render() {
        return (

            <div>
                <News category='https://newsapi.org/v2/top-headlines?category=Health&country=in' pageSize='6' /></div>
        )
    }
}

export default Health