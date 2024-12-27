
// Translation: Text to Binary
document.getElementById("translateBtn").addEventListener("click", function() {
  var inputText = document.getElementById("inputText").value;
  var binaryOutput = textToBinary(inputText);
  document.getElementById("outputText").value = binaryOutput;
});

// Decoding: Binary to Text
document.getElementById("decodeBtn").addEventListener("click", function() {
  var binaryText = document.getElementById("inputText").value;
  var decodedText = binaryToText(binaryText);
  document.getElementById("outputText").value = decodedText;
});

// Function to Copy Output to Clipboard
document.getElementById("copyBtn").addEventListener("click", function() {
  var outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
});

// Text to Binary Conversion
function textToBinary(text) {
  return text.split('').map(function(char) {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

// Binary to Text Conversion
function binaryToText(binary) {
  return binary.split(' ').map(function(bin) {
      return String.fromCharCode(parseInt(bin, 2));
  }).join('');
}