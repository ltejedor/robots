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
    // TODO
    // NAVIGATE
    navigateTo("wordselection");
}
const takeArtSeedButton = function(seeds) {
    console.log(`takeArtSeedButton clicked`);
    // STORE GLOBAL VARIABLE
    // TODO
    // NAVIGATE
    navigateTo("pay");
}
const generateArtButton = function(imageFilename) {
    console.log(`generateArtButton clicked`);
    // FETCH IMAGE FROM LOCAL
    // TODO
    // DISPLAY IMAGE
    // TODO
    // NAVIGATE
    navigateTo("claim");
}
const claimArtButton = function() {
    console.log(`claimArtButton clicked`);
    // UPLOAD IMAGE TO SIA
    uploadToSia("1.jpeg")
        .then(function(siaId) {
            console.log(`siaId: ${siaId}`);
            // GENERATE NFT WITH SIA_ID
            return makeNFT("0xE7904160ca9500D2382B9163aEc20DDb0F9dCCC3", siaId);
        })
        .then(function(txId) {
            console.log(`txId: ${txId}`);
        });
    // NAVIGATE
    // navigateTo("confirmation");
}