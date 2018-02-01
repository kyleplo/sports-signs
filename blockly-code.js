Blockly.JavaScript['create'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'select("' + dropdown_type + '");\n';
  return code;
};

Blockly.JavaScript['settext'] = function(block) {
  var text_top = block.getFieldValue('top');
  var text_bottom = block.getFieldValue('bottom');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setText("'+text_top+'","'+text_bottom+'");\n';
  return code;
};

Blockly.JavaScript['settextcolor'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setTextColor('+value_color+');\n';
  return code;
};

Blockly.JavaScript['setbgcolor'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setBackgroundColor('+value_color+');\n';
  return code;
};

Blockly.JavaScript['setoutlinecolor'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setOutlineColor('+value_color+');\n';
  return code;
};

Blockly.JavaScript['setobjectcolor'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setObjectColor('+value_color+');\n';
  return code;
};

Blockly.JavaScript['hideobject'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'hideObject();\n';
  return code;
};

Blockly.JavaScript['color'] = function(block) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + colour_color + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 1];
};

Blockly.JavaScript['patriotscolor'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = 'colors.patriots.' + dropdown_color;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 1];
};

Blockly.JavaScript['eaglescolor'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = 'colors.eagles.' + dropdown_color;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 1];
};