var workspace;
var options = ["flag","sign","helmet","football","baseball"];
var svgs = [];
var i = 0;
function loadNext(){
fetch("./" + options[i] + ".svg").then(function (r){return r.text()}).then(function (t){svgs.push(t)});i++;if(i < 5){loadNext()}};
loadNext();
var mysvg = "";
var colors = {patriots: {blue: "#0C2340",red: "#C8102E",silver: "#A2AAAD",white:"#FFFFFF"},eagles: {green: "#004851",black:"#000000",grey:"#54585A",silver:"#8D9093"}};
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
mysvg = mysvg.replace(/<!--.+-->/g,"");
}
function run(type){
if(type === "blockly"){
var code = Blockly.JavaScript.workspaceToCode(workspace);
eval(code);
document.getElementById("code").removeAttribute("hidden");
document.getElementById("char").innerHTML = code.length;
document.getElementById("js").innerHTML = code;
}else if(type === "js"){
try {eval(document.getElementById("code").value);document.getElementById("error").innerHTML = ""}
catch(error){document.getElementById("error").innerHTML = error};
};
compressSvg();
var compressed = "data:image/svg+xml;base64," + btoa(mysvg);
document.getElementById("result").src = compressed;
document.getElementById("download").href = compressed;
document.getElementById("share").href = "./share.html#" + btoa(mysvg);
}
