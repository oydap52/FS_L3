const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
  }

  function readFromFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
  }

  function updateFile(filePath, newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }

  function clearFile(filePath) {
    fs.writeFileSync(filePath, '', 'utf8');
  }

  function cleanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = content
      .replace(/[0-9]/g, '')
      .toLowerCase();
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
  }

  function copyFile(sourcePath, targetPath) {
    const content = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(targetPath, content, 'utf8');
  }

  function createFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  }

  function deleteFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
      fs.rmdirSync(folderPath, { recursive: true });
    }
  }

  module.exports = {
    writeToFile,
    readFromFile,
    updateFile,
    clearFile,
    cleanFile,
    copyFile,
    createFolder,
    deleteFolder,
  };