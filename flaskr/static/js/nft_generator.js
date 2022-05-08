const moonbeamConfig = {
    baseURL: 'http://localhost:8080',
    nftGeneratorSubPath: 'mintNFT'
};
const siaConfig = {
    baseURL: "http://localhost:5000",
    imageUploaderSubPath: "sia_upload"
};

const sendRequest = function (baseURL, subURL) {

    return new Promise( function(resolve, reject) {
        // Creating Our XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Making our connection
        const url = `${baseURL}/${subURL}`;
        xhr.open("GET", url, true);

        // function execute after request is successful
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
                resolve(this.response)
            }
        }
        // Sending our request
        xhr.send();
    });
}

const makeNFT = function(nftOwnerAddress, siaFileId) {
    const subURL = `${moonbeamConfig.nftGeneratorSubPath}/${nftOwnerAddress},${siaFileId}`;
    return sendRequest(moonbeamConfig.baseURL, subURL);
}
// SAMPLE INVOCATION
// makeNFT("0xE7904160ca9500D2382B9163aEc20DDb0F9dCCC3", "ClientBlah1");

const uploadToSia = function(imageName) {
    const subURL = `${siaConfig.imageUploaderSubPath}/${imageName}`;
    return sendRequest(siaConfig.baseURL, subURL);
}
// SAMPLE INVOCATION
// uploadToSia("1.jpeg");
