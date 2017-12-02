function expandHelpLinkDEV() {}

function logScripts() {
  function assembleScripts() {
    var scripts;
    var numberOfScripts = document.getElementByTagName("script").length;
    var assembledScripts = [];
    for (var i = 0; i < numberOfScripts; i++) {
      var scriptText = document.scripts[i].text;
      assembledScripts.push(scriptText);
      console.log("script number " + i + " added:" + scriptText);
    }
    console.log(assembledScripts);
  }
function listIds() {
  var x = document.getElementById("download").length
  console.log(x);
}
}
