'use strict';
// Block Factory - https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
// ... Names have been changed to clarify which are nemes
// ... Comments have been added to clarify actions
Blockly.defineBlocksWithJsonArray
([
  {
    // "typeToolboxScreen" is the name for javascript.javascriptGenerator.forBlock{}
    "type": "typeToolboxScreen",
    // The word "Simulator" is displayed on the Toobox
    "message0": "Simulator %1 %2 %3 %4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_label_serializable",
        // "nameInitializationBlocks" is in javascript.javascriptGenerator.forBlock{}
        "name": "nameInitializationBlocks",
        // "The words "... Put initialization blocks here" are displayed on the Block screen
        "text": "... Put initialization blocks here"
      },
      {
        "type": "input_statement",
        // "nameInitializationBlocks" is in javascript.javascriptGenerator.forBlock{}
        "name": "nameInitializationBlocks"
      },
      {
        "type": "field_label_serializable",
        // "nameRunBlocks" is in javascript.javascriptGenerator.forBlock{}
        "name": "nameRunBlocks",
        // The words "... Put run blocks here" are displayed on the Block screen
        "text": "... Put run blocks here"
      },
      {
        "type": "input_statement",
        // "nameRunBlocks" is in javascript.javascriptGenerator.forBlock{}
        "name": "nameRunBlocks "
      },
    ],
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  }
]);

// Used to generate and run JavaScript
javascript.javascriptGenerator.forBlock['typeToolboxScreen'] = function(block, generator) {
  // Put initialization blocks here
  const initializationCode = generator.statementToCode(block, 'nameInitializationBlocks');
  // Put run blocks here
  const runCode = generator.statementToCode(block, 'nameRunBlocks ');
  // TODO: Assemble javascript into code variable.
  const code = initializationCode + '\n\n' + runCode;
  console.log(code);
  return code;
};
