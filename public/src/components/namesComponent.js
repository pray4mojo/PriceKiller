import React from 'react';

let namesComponent = ({ names, onIncrement}) => (
    <div>
      <ul>
        {names.map((elem, index) => {
          return <li key={index}>{elem}</li>
        })}
      </ul>
      <form id="addPerson" onSubmit={(event) => {onIncrement(event)}}>
        <input type="text" id="newName" />
        <input type="submit" value="Submit Name" />
      </form>
    </div>
);

export default namesComponent;