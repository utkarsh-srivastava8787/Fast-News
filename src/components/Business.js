import React, { Component } from 'react'
import News from './News'

export class Business extends Component {
    render() {
        return (
            <div>
                <News category='https://newsapi.org/v2/top-headlines?category=Business&country=in' pageSize='6' />
            </div>
        )
    }
}

export default Business