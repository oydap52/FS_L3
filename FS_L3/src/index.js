const fileUtils = require('./modules/fileUtils');

fileUtils.writeToFile('test.txt', 'ILYA SUKHODOLSKIY3901');
console.log(fileUtils.readFromFile('test.txt')); // "ILYA SUKHODOLSKIY3901"
fileUtils.cleanFile('test.txt');
console.log(fileUtils.readFromFile('test.txt')); // "ilya sukhodolskiy"
fileUtils.createFolder('testFolder');
fileUtils.copyFile('test.txt', 'testFolder/copy.txt');