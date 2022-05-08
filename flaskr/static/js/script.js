// (GLOBAL) STATE VARIABLES
var WALLET_ADDRESS = "";
var SEEDS = [];
var SIA_IDs = [];
// UTILITY FUNCTIONS
const navigateTo = function(pageName) {
    window.location = `http://localhost:5000/${pageName}`;
}
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
    // NAVIGATE
    navigateTo("wordselection");
}
const takeArtSeedButton = function(seeds) {
    console.log(`takeArtSeedButton clicked`);
    // STORE GLOBAL VARIABLE
    // NAVIGATE
    navigateTo("pay");
}
const generateArtButton = function(imageFilename) {
    console.log(`generateArtButton clicked`);
    // FETCH IMAGE FROM LOCAL
    // DISPLAY IMAGE
    // NAVIGATE
    navigateTo("claim");
}
const claimArtButton = function() {
    console.log(`claimArtButton clicked`);
    // UPLOAD IMAGE TO SIA
    // GENERATE NFT WITH SIA_ID
    // NAVIGATE
    navigateTo("confirmation");
}