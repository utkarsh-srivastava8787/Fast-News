
import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        // let { title, description, urlToImage, newUrl, author, date } = Fthis.props    ---- insted of this we can also use this.prop.(element name )

        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}...</h5>
                        <p className="card-text">{this.props.description}... </p>
                        <a href={this.props.newUrl} target='block' className="btn btn-primary">Go somewhere</a>
                        <div className="card-footer text-muted">
                            {this.props.date}    {!this.props.author ? 'author not found' : this.props.author}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems