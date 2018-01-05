import React from 'react';
import EbayItem from '../components/EbayItem.jsx';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitSearch, setResultsPage, showSearchResults } from '../actions/main_a.jsx';
import history from "../../../Auth/history.js";

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (event) => {
      const searchQuery = $('#searchQuery').val();
      if (searchQuery.length < 4) {
        alert('Search string must be at least four characters long');
      } else {
        dispatch(submitSearch(searchQuery));
        dispatch(showSearchResults(true));
        event.target.childNodes[0].value = '';
        history.push('/');
      }
      event.preventDefault();
    },

    submitWithEnter: (event) => {
      const code = (event.keyCode ? event.keyCode : event.which);
      if (code == 13) {
        const searchQuery = $('#searchQuery').val();
        if (searchQuery.length < 4) {
          alert('Search string must be at least four characters long');
        } else {
          dispatch(submitSearch(searchQuery));
          dispatch(showSearchResults(true));
          history.push('/');
        }
      }
    },

    incrementResultsPage: (searchResults) => {
      dispatch(setResultsPage(1, searchResults));
    },

    decrementResultsPage: () => {
      dispatch(setResultsPage(-1));
    },

  }
}


let Search = ({ searchResults, onSearch, submitWithEnter, incrementResultsPage, decrementResultsPage, hideResults }) => {
  const items = searchResults.items.filter(item => item.page === searchResults.resultsPage);
  if (items[0].sellingStatus && searchResults.areShowing ) {
    return (
      <div className="card">
        <div className="field has-addons columns is-mobile is-gapless">
          <div className="control column">
            <input id="searchQuery" className="input is-expanded" type="text" placeholder="See what Ebay has to offer" onKeyPress={(event) => {submitWithEnter(event)}} />
          </div>
          <div className="control column is-narrow">
            <a className="button is-info" onClick={(event) => {onSearch(event)}}>
              Search
            </a>
          </div>
        </div>

      <div className="card-content">
        <ul>
          {searchResults.items.filter(item => item.page === searchResults.resultsPage)
            .map((item, index) => {
            return <EbayItem key={item.viewItemURL[0]} item={item} />
          })}
        </ul>
      </div>
      <nav className="pagination is-centered is-gapless" role="navigation" aria-label="pagination">
      <a
        className="button pagination-previous fa fa-arrow-circle-left is-info"
        id="decrementResultsPage"
        onClick={() => {decrementResultsPage()}}
      >
      </a>
      <a
        className="button pagination-next fa fa-arrow-circle-right is-info"
        id="incrementResultsPage"
        onClick={() => {incrementResultsPage(searchResults)}}
      >
      </a>
      </nav>
    </div>
    )
  } else {
    let dummyItems = '';
    return (
      <div>
        <div className="control column">
          <input id="searchQuery" className="input is-expanded" type="text" placeholder="See what Ebay has to offer" onKeyPress={(event) => {submitWithEnter(event)}} />
        </div>
        <div className="control column is-narrow">
          <a className="button is-info" onClick={(event) => {onSearch(event)}}>
            Search
          </a>
        </div>
        {dummyItems}
      </div>)
  }
}

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;