//updated layer hompage - ToolResult.js update 3.0
/*
DOMAIN MODEL: ToolResult
------------------------
Represents output from a structural analysis tool.
Pure container object.
*/

export class ToolResult {

  constructor(toolName, findings = {}) {

    // Name of the tool that produced this result
    this.toolName = toolName;

    // Findings object (structure depends on tool)
    this.findings = findings;

    // Optional structural flags
    this.flags = [];

    // Optional metadata (future extension)
    this.metadata = {};
  }

  /*
  Add structural flag (optional usage)
  */
  addFlag(flag) {
    this.flags.push(flag);
  }

  /*
  Attach metadata (optional usage)
  */
  addMetadata(key, value) {
    this.metadata[key] = value;
  }
}



//updated 2.0
// export class ToolResult {
//   constructor(name, findings) {
//     this.toolName = name;
//     this.findings = findings;
//   }
// }


// export class ToolResult {
//   constructor(toolName, findings = {}, flags = [], confidenceImpact = "neutral") {
//     this.toolName = toolName;
//     this.findings = findings;
//     this.flags = flags;
//     this.confidenceImpact = confidenceImpact;
//   }
// }
