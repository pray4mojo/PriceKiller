export const AUTH_CONFIG = {
  domain: 'pricekiller.auth0.com',
  clientId: 'FTYdG4IJsEBoitw1MRvFqxcd94F150Oq',
  callbackUrl: 'http://localhost:1111/callback',
  options: {
  	languageDictionary: {
  	  title: "pricekiller"
  	},
    theme: {
      logo: 'https://s3-us-west-1.amazonaws.com/hackreactor27/pricekiller_logov1.png',
      primaryColor: '#3A99D8',
      socialButtonStyle: 'small'
    },
    allowedConnections: ['google'],
    allowLogin: true,
    loginAfterSignUp: true,
    closable: true,
    autoclose: true,
    oidcConformant: false,
    allowLogin: true,
  }
}
