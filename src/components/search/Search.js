import React from 'react';
import './Search.scss';
import AdvanceSearchOptions from './AdvanceSearchOptions';
import SearchResult from './SearchResult';

export default class SearchBox extends React.Component {

    constructor() {
        super();

        this.fetchData = this.fetchData.bind(this);
        this.state = {
            showAdvSearch: false,
            searchResult: null
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.fetchData();
    }

    toggleFilter(e) {
        this.setState({
            showAdvSearch: !this.state.showAdvSearch
        })
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => this.setState({searchResult: data}));
    }

    render() {
        return(
            <>
                <div className="search-wrapper">
                    <form className="search-box" action="/" method="GET" onSubmit={this.onFormSubmit.bind(this)}>
                        <div className="basic-search">
                            <input type="search" name="q" placeholder="Enter a Search Query"/>
                            <input type="submit" value="GO"/>
                            <input type="button" value="Filter" onClick={this.toggleFilter.bind(this)}/>
                        </div>
                        <div className={this.state.showAdvSearch === true ? 'adv-search' : 'adv-search hide-adv-search'}>
                            <AdvanceSearchOptions />
                        </div>
                    </form>
                    <div className="search-result">
                        {this.state.searchResult !== null ? this.state.searchResult.map((val, i) => <SearchResult header={val.title} description={val.body} key={i} />) : <NoDataFound/> }
                    </div>
                </div>
            </>
        );
    }
}

/**
 * No data found - search result 
 */

const NoDataFound = () => {
    return(
        <div className="no-data-found">No Data Found... Press 'GO' to Load Dummy Data!</div>
    );
}