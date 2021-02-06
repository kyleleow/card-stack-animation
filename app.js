const imageWidth = 15;
const imageHeight = 15;
const imageTotalPixels = imageWidth * imageHeight;

function appendPixelsDiv(parentDivName) {
  var parentEle = document.getElementsByClassName(parentDivName)[0]

  for (let i = 0; i < imageTotalPixels; i++) {
    parentEle.appendChild(createPixelNode());
  }  
}

function createPixelNode() {
  var pixelNode = document.createElement('div');
  pixelNode.className = 'pixel';
  return pixelNode;
}

appendPixelsDiv('content');
appendPixelsDiv('padding');
appendPixelsDiv('border');
