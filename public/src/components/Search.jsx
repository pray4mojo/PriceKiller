import React from 'react';
import EbayItem from '../components/EbayItem.jsx';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/main_a.jsx';

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
        event.target.childNodes[0].value = '';
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
        }
      }
    },

    incrementResultsPage: (searchResults) => {
      dispatch(setResultsPage(1, searchResults));
    },

    decrementResultsPage: () => {
      dispatch(setResultsPage(-1));
    }

  }
}


let Search = ({ searchResults, onSearch, submitWithEnter, incrementResultsPage, decrementResultsPage }) => {
  const items = searchResults.items.filter(item => item.page === searchResults.resultsPage);
  if (items[0].sellingStatus) {
    return (
      <div className="card">
        <div className="field has-addons columns is-mobile is-gapless">
          <div className="control column">
            <input id="searchQuery" className="input is-expanded" type="text" placeholder="Find a repository" onKeyPress={(event) => {submitWithEnter(event)}} />
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
            return <EbayItem key={index} item={item} />
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
    return (
      <div>
        <div className="control column">
          <input id="searchQuery" className="input is-expanded" type="text" placeholder="Find a repository" onKeyPress={(event) => {submitWithEnter(event)}} />
        </div>
        <div className="control column is-narrow">
          <a className="button is-info" onClick={(event) => {onSearch(event)}}>
            Search
          </a>
        </div>
        <ul>
          {items.map((item, index) => {
            return <EbayItem key={index} item={item} />
          })}
        </ul>
      </div>)
  }
}

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;