var workspace;
var options = ["sign","flag","helmet","football","baseball"];
var svgs = [];
for(var i = 0;i < options.length;i++){fetch("./" + options[i] + ".svg").then(function (r){svgs.push(r.text())})};
var mysvg = "";
var colors = {patriots: {blue: "#0C2340",red: "#C8102E",silver: "#A2AAAD",white:"#FF5500"},eagles: {green: "#004851",black:"#000000",grey:"#54585A",silver:"#8D9093"}};
function select(option){
mysvg = svgs[options.indexOf(option)];
}
function setText(top,bottom){
mysvg = mysvg.replace(/GO/g,top);
mysvg = mysvg.replace(/TEAM/g,bottom);
}
function setOutlineColor(color){
mysvg = mysvg.replace(/black/g,color);
}
function setBackgroundColor(color){
mysvg = mysvg.replace("none",color);
}
function setObjectColor(color){
mysvg = mysvg.replace(/blue/g,color);
}
function setTextColor(color){
mysvg = mysvg.replace(/red/g,color);
}
function hideObject(){
mysvg = mysvg.replace(/blue/g,"none");
}
function compressSvg(){
mysvg = mysvg.replace(/<!--.+-->/g);
}
function run(type){
if(type === "blockly"){
eval(Blockly.JavaScript.workspaceToCode(workspace));
}else if(type === "js"){
try {eval(document.getElementById("code").value);document.getElementById("error").innerHTML = ""}
catch(error){document.getElementById("error").innerHTML = error};
};
var compressed = "data:image/svg+xml;base64," + btoa(compressSvg(mysvg));
document.getElementById("result").src = compressed;
document.getElementById("download").href = compressed;
document.getElementById("share").href = "./share.html#" + btoa(compressSvg(mysvg));
}