import React from 'react';

let style = {background: '#22282F'};

export default class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.closePreferencesWindow = this.closePreferencesWindow.bind(this);
  }

  closePreferencesWindow(e) {
    console.log('fire')
    $('.modal').removeClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  }

  render(){
    return (
      <div className="modal">
        <div className="modal-background" style={style}>
          <div className="modal-content">
            <div className="card">
              <header className="card-header">
                Subscription Preference
              </header>
              <div className="card-content">
                <p>Receive email notifications?</p>
                <div className="control">
                  <label htmlFor="" className="radio">
                    <input type="radio" name="subscription"/>
                    Yes
                  </label>
                  <label htmlFor="" className="radio">
                    <input type="radio" name="subscription"/>
                    No
                  </label>
                </div>
              </div>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              onClick={(e)=> {this.closePreferencesWindow(e)}}
            ></button>
          </div>
        </div>
      </div>
      )
  }
}

