import React from 'react';

const Notifications = (props) => (
  <div className="modal">
    <div className="modal-background">
      <div className="modal-content">
        <div className="card">
          <div className="card-content">
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
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  </div>
)

export default Notifications;