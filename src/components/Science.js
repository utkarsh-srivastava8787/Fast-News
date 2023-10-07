import React, { Component } from 'react'
import News from './News'

export class Science extends Component {
    render() {
        return (

            <div>
                <News category='https://newsapi.org/v2/top-headlines?category=science&country=in' pageSize='6' /></div>
        )
    }
}

export default Science