import React from 'react';
import './Search.scss';
import AdvanceSearchOptions from './AdvanceSearchOptions';

export default class SearchBox extends React.Component {

    constructor() {
        super();

        this.state = {
            showAdvSearch: false
        }
    }

    toggleFilter(e) {
        this.setState({
            showAdvSearch: !this.state.showAdvSearch
        })
    }

    render() {
        return(
            <>
                <div className="search-wrapper">
                    <form className="search-box" action="/" method="GET">
                        <div className="basic-search">
                            <input type="search" name="q" placeholder="Enter a Search Query"/>
                            <input type="submit" value="GO"/>
                            <input type="button" value="Filter" onClick={this.toggleFilter.bind(this)}/>
                        </div>
                        <div className="adv-search">
                            { this.state.showAdvSearch === true ? <AdvanceSearchOptions/> : ''}
                        </div>
                    </form>
                </div>
            </>
        );
    }
}