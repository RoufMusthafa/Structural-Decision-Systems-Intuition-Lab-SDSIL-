//updated layer hompage - Decision.js update 3.0
/*
DOMAIN MODEL: Decision
----------------------
Represents a single decision context.
Contains metadata only.
No evaluation logic.
*/

export class Decision {

  constructor(problemType, inputs, assumptions = {}) {

    this.id = this.generateId();

    // Type of decision:
    // job_offer | investment | system_design
    this.problemType = problemType;

    // Raw user input
    this.inputs = inputs;

    // Assumptions injected by assumption engine
    this.assumptions = assumptions;

    // Structural classification (set later by classifier)
    this.timeframe = null;       // short | medium | long
    this.reversibility = null;   // reversible | partial | irreversible
    this.repeatability = null;   // one-shot | repeatable
  }

  /*
  Simple internal ID generator.
  Frontend-only safe.
  */
  generateId() {
    return "DEC-" + Math.random().toString(36).substring(2, 9);
  }
}






//updated 2.0
// export class Decision {
//   constructor(problemType, inputs, assumptions) {
//     this.problemType = problemType;
//     this.inputs = inputs;
//     this.assumptions = assumptions;
//     this.timeframe = "";
//     this.reversibility = "";
//     this.repeatability = "";
//   }
// }




// export class Decision {
//   constructor({
//     problemType = "",
//     inputs = {},
//     assumptions = {}
//   }) {
//     this.id = crypto.randomUUID();
//     this.createdAt = new Date().toISOString();
//     this.version = "v61.70";

//     this.problemType = problemType;
//     this.timeframe = "";
//     this.reversibility = "";
//     this.repeatability = "";

//     this.inputs = inputs;
//     this.assumptions = assumptions;
//     this.metadata = {};
//   }
// }
