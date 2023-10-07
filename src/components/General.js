import React, { Component } from 'react'
import News from './News'

export class General extends Component {
    render() {
        return (

            <div>

                <News category='https://newsapi.org/v2/top-headlines?category=General&country=in' pageSize='6' />
            </div>
        )
    }
}

export default General