Blockly.Blocks['create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create")
        .appendField(new Blockly.FieldDropdown([["flag","flag"], ["normal","sign"], ["helmet","helmet"], ["football","football"], ["baseball","baseball"]]), "TYPE")
        .appendField("sign");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Create a sign!");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['settext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set text to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("GO"), "top");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("TEAM"), "bottom");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Set the text on your sign");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['settextcolor'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("String")
        .appendField("set text color to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Set the color of the text on your sign");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setbgcolor'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("String")
        .appendField("set background color to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Set the color of the background of your sign");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setoutlinecolor'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("String")
        .appendField("set outline color to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Set the color of the outline of your sign");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setobjectcolor'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("String")
        .appendField("set object color to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Set the color of the object on your sign (object varies by type of sign)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hideobject'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hide object");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Remove the object from your sign entirely");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("A color");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['patriotscolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("patriots")
        .appendField(new Blockly.FieldDropdown([["blue","blue"], ["red","red"], ["silver","silver"], ["white","white"]]), "color");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("A patriots color");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['eaglescolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("eagles")
        .appendField(new Blockly.FieldDropdown([["green","green"], ["black","black"], ["grey","grey"], ["silver","silver"]]), "color");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("A patriots color");
 this.setHelpUrl("");
  }
};