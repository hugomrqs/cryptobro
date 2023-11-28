const simpleStorage = artifacts.require('SimpleStorage.sol');

module.exports = function(deeployer){
    deeployer.deploy(simpleStorage)
}