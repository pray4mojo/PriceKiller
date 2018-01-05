import React from 'react';

let style = {
  background: {
    backgroundImage: `url('https://s3-us-west-1.amazonaws.com/hackreactor27/engineblock.jpeg')`
  },
  card: {
    margin: '0 auto',
    width: '50%',
    minWidth: '500px',
    height: '50%'
  },
  inner: {
    textAlign: 'center'
  },
  diagram: {
    margin: '10px 10px'
  }
}

export default class GettingStarted extends React.Component {
  render(){
    return (
      <div style={style.background}>
        <div className="card" style={style.card}>
          <div className="card-content" style={style.inner}>
            <p className="title">
              What is Price Killer?
            </p>
            <p>
              This application shares a Mongo Database with a separately deployed cron worker. This cron worker wakes up every hour and queries Ebay's Completed Items API to gather the closing prices of recently sold products.When a user favorites a current Ebay auction using the app's search portal, that product is added to the database so the cron worker can begin collecting its price history data. 
            </p>
            <div style={style.diagram}>
              <img src="https://s3-us-west-1.amazonaws.com/hackreactor27/CronWorker_ThesisHRR27+(1).jpg" alt="flow diagram"/>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <span>
                <h1 className="title is-4">Using PriceKiller as a <em>guest</em>:</h1>
                <p>Navigate to the chart page and press the 'Display Global Favorites' button. You can now view the price history for all items currently in the PriceKiller database</p>
              </span>
            </div>
            <div className="card-footer-item">
              <span>
                <h1 className="title is-4">Utilizing PriceKiller's <em>full potential</em>:</h1>
                <p>Log in with a <strong>Google</strong> account.  Use the search portal to find open auctions on Ebay that correspond to products you would like to monitor. When you find what you're looking for, press the star icon to add that product to your temporary favorites.  To begin tracking that product, open your sidebar and click the 'Store New Favorite(s)' button. If a previous user has already favorited that item, you now have access to its price history. If the item wasn't being tracked in the system before, it is now! Check back later to see how the price is fluctuating.  Note: Our system is case sensitive. If one of your favorited products is not showing price history, and you think it already exists in the database, make sure the product names are identical.</p>
              </span>
            </div>
          </footer>
        </div>
      </div>
      )
  }
}