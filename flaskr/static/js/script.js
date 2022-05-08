// UTILITY FUNCTIONS
const navigateTo = function(pageName) {
    window.location = `http://localhost:5000/${pageName}`;
}
const getQueryStrings = function () { 
    var assoc  = {};
    var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
    var queryString = location.search.substring(1); 
    var keyValues = queryString.split('&'); 
  
    for(var i in keyValues) { 
      var key = keyValues[i].split('=');
      if (key.length > 1) {
        assoc[decode(key[0])] = decode(key[1]);
      }
    } 
  
    return assoc; 
  } 
// (GLOBAL) STATE VARIABLES
var WALLET_ADDRESS = getQueryStrings()["WALLET_ADDRESS"];
var SEEDS = [];
var SIA_IDs = [];
var IMAGE_ADDRESS = "1.jpeg"
// UI BUTTONS
const visitAsteroidButton = function() {
    console.log(`visitAsteroidButton clicked`);
    // NAVIGATE
    navigateTo("walletselection");
}
const connectWalletButton = function() {
    console.log(`connectWalletButton clicked`);
    // NAVIGATE
    navigateTo("connect");
}
const connectMetaMaskButton = function(walletAddress) {
    console.log(`connectMetaMaskButton clicked`);
    // CONNECT WITH METAMASK
    const enableMetaMask = function() {
        return new Promise(function(resolve, reject) {
            resolve(window.ethereum.enable());
        });
    }
    enableMetaMask()
        .then(function(response) {
            WALLET_ADDRESS = response[0];
            // NAVIGATE
            navigateTo(`wordselection?WALLET_ADDRESS=${WALLET_ADDRESS}`);
        });
}
const takeArtSeedButton = function(seeds) {
    console.log(`takeArtSeedButton clicked`);
    // STORE GLOBAL VARIABLE
    // TODO
    // NAVIGATE
    navigateTo(`pay?WALLET_ADDRESS=${WALLET_ADDRESS}`);
}
const generateArtButton = function(imageFilename) {
    console.log(`generateArtButton clicked`);
    // FETCH IMAGE FROM LOCAL
    // TODO
    // DISPLAY IMAGE
    // TODO
    // NAVIGATE
    navigateTo(`claim?WALLET_ADDRESS=${WALLET_ADDRESS}`);
}
const claimArtButton = function() {
    console.log(`claimArtButton clicked`);
    // UPLOAD IMAGE TO SIA
    uploadToSia(IMAGE_ADDRESS)
        .then(function(siaId) {
            console.log(`siaId: ${siaId}`);
            // GENERATE NFT WITH SIA_ID
            return makeNFT(WALLET_ADDRESS, siaId);
        })
        .then(function(txId) {
            console.log(`txId: ${txId}`);
        });
    // NAVIGATE
    // TODO: navigateTo("confirmation");
}