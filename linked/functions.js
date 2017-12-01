function expandHelpLink {
  var confirm = confirm("Your browser may not support web downloads. Press okay to access the page on the browser.");
  if (confirm === true) {
    window.open('././download/cipher-list.txt', '_blank')
  }
}