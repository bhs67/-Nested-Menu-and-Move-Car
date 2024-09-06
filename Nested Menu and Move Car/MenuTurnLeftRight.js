'use strict';
// Block Factory - https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
// ... Names have been changed to clarify which are nemes
// ... Comments have been added to clarify actions
Blockly.defineBlocksWithJsonArray
([
  {
    // "typeTurnLeftRight" is the name for javascript.javascriptGenerator.forBlock{}
    "type": "typeTurnLeftRight",
    "tooltip": "",
    "helpUrl": "",
    // The words "Turn left or right" are displayed on Block screen
    "message0": "Turn left or right %1 by %2 degrees",
    "args0": [
      {
        "type": "field_dropdown",
        // "nameTurnLeftRight" is in javascript.javascriptGenerator.forBlock{}
        "name": "nameTurnLeftRight",
        "options": [
          [
            "left",
            "nameTurnLeft"
          ],
          [
            "right",
            "nameTurnRight"
          ]
        ]
      }
    ],
    "args1": [
      {
        "type": "field_number",
        "name": "nameTurnLeftRight",
        "value": 100,
        "min": 0,
        "max": 100,
        "precision": 10,
        "options": [
          [
            "degrees",
            "nameTurnLeft"
          ],
          [
            "degrees",
            "nameTurnRight"
          ]
        ]
      }
    ],
    "colour": 225,
    "previousStatement": null,
    "nextStatement": null
  }
]);

// Used to generate and run JavaScript
javascript.javascriptGenerator.forBlock['typeTurnLeftRight'] = function(block, generator) {
  const dropdownTurnLeftRight = block.getFieldValue('nameTurnLeftRight');
  // TODO: Assemble javascript into code variable.
  return dropdownTurnLeftRight === 'nameTurnLeft'
        ? 'fMoveDegrees(-1, 0, "left", degrees)'
        : dropdownTurnLeftRight === 'nameTurnRight'
        ? 'fMoveDegrees(1, 0, "right", degrees)'
        : '\n';
};
