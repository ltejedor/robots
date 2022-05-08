function sendRequest(subURL, queryString) {

    // Creating Our XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Making our connection
    const baseURL = 'http://localhost:8080';
    const url = `${baseURL}/${subURL}/${queryString? queryString : ""}`;
    xhr.open("GET", url, true);

    // function execute after request is successful
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    // Sending our request
    xhr.send();
}

const makeNFT = function(nftOwnerAddress, siaFileId) {
    sendRequest(`mintNFT/${nftOwnerAddress},${siaFileId}`);
}

// SAMPLE INVOCATION
// makeNFT("0xE7904160ca9500D2382B9163aEc20DDb0F9dCCC3", "ClientBlah1");
