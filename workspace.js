function load(){


var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : true, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : false, 
	oneBasedIndex : true
};

var workspace = Blockly.inject("blocklyDiv", options);
var xml_text = '<xml xmlns="http://www.w3.org/1999/xhtml" id="workspaceBlocks" style="display:none"><variables></variables><block type="create" id="qg_xDb-31x^~$:/PU_G}" x="38" y="38"><field name="TYPE">flag</field></block></xml>';
var xml = Blockly.Xml.textToDom(xml_text);
Blockly.Xml.domToWorkspace(xml, workspace);}