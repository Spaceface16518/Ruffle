//Help Link
document.getElementByTagName(body).onLoad = function() {
  onLoad()
}
//On Load code
function onLoad() {
  logScripts();
}
//The code that is excecuted upon the page loading
function expandHelpLink() {
  window.alert("Your browser may not support this download");
  console.log("Browser does not support download");
}
//The code for the help link
function testFunction() {
  alert("test");
}

function check(form) {
  if (form.userid.value === "Amrit" && form.pswrd.value === "Amrit123") {
    window.open('../main.html')
  }
  elseif(form.userid.value === "Priyanka" && form.pswrd.value === "Priyanka123"); {
    window.open('../main.html')
  }
  elseif(form.userid.value !== 'Amrit' || 'Priyanka'); {
    window.alert("Username not found")
  } else {
    window.alert("Please try again")
  }
}
