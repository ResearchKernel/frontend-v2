import React from 'react';
import './SearchResult.scss'

export default class SearchResult extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return(
            <>
                <div className="result-card">
                    <div className="header">{this.props.header}</div>
                    <div className="description">{this.props.description}</div>
                    <div className="action">
                        <button className="button download">Download</button>
                        <button className="button view">View</button>
                    </div>
                </div>
            </>
        );
    }
}