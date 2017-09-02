// Data interface into the main process.
function API() {
   this.apiName = 'APIV1';
   this.apiVersion = '2017-09-02';

   this.sendMessage();
}

API.prototype.sendMessage = function () {
    console.log('Test Message')
};