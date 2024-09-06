'use strict';
// Block Factory - https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
// ... Names have been changed to clarify which are nemes
// ... Comments have been added to clarify actions
Blockly.defineBlocksWithJsonArray
([
  {
    // --- Block Factory - Block Definition
    // "typeForwardBackward" is the name for javascript.javascriptGenerator.forBlock{}
    "type": "typeForwardBackward",
    // The words "Forward or backward" are displayed on Block screen
    "message0": "Forward or backward %1",
    "args0": [
      {
        "type": "field_dropdown",
        // "nameForwardBackward" is in javascript.javascriptGenerator.forBlock{}
        "name": "nameForwardBackward",
        "options": [
          [
            "forward",
            "nameMoveForward"
          ],
          [
            "backward",
            "nameMoveBackward"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);
// --- Block Factory - Generator Stub
// Used to generate and run JavaScript
javascript.javascriptGenerator.forBlock['typeForwardBackward'] = function(block, generator) {
  const dropdownForwardBackward = block.getFieldValue('nameForwardBackward');
  // TODO: Assemble javascript into code variable.
  return dropdownForwardBackward === 'nameMoveForward'
        // ? 'fSinCosArrowMovement(0, -1);\n'
        ? 'fMoveDegrees(0, -1, "forward", 0)'
        : dropdownForwardBackward === 'nameMoveBackward'
        // ? 'fSinCosArrowMovement(0, 1);\n'
        ? 'fMoveDegrees(0, 1, "backward", 0)'
        : '\n';
};
