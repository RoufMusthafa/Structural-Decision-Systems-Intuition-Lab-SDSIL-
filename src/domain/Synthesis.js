//updated layer hompage - ToolResult.js update 3.0
/*
DOMAIN MODEL: Synthesis
-----------------------
Final output returned to UI layer.
Does NOT compute logic.
Pure structured result container.
*/

export class Synthesis {

  constructor() {

    // Human-readable explanation points
    this.summaryPoints = [];

    // Structural risks detected
    this.dominantRisks = [];

    // Confidence level: low | medium | high
    this.confidence = "low";

    // Assumptions used in reasoning
    this.assumptionsUsed = {};

    // Optional: Future scoring layer
    this.structuralScore = null;

    // Optional: Future explanation expansion
    this.explainWhy = {};
  }

  /*
  Helper methods for clean insertion
  */

  addSummary(point) {
    this.summaryPoints.push(point);
  }

  addRisk(risk) {
    this.dominantRisks.push(risk);
  }

  setConfidence(level) {
    this.confidence = level;
  }
}




//updated 2.0
// export class Synthesis {
//   constructor() {
//     this.summaryPoints = [];
//     this.dominantRisks = [];
//     this.confidence = "low";
//     this.assumptionsUsed = {};
//   }
// }



// export class Synthesis {
//   constructor() {
//     this.summaryPoints = [];
//     this.dominantRisks = [];
//     this.saferAlternatives = [];
//     this.nextQuestions = [];
//     this.confidence = "low";
//     this.assumptionsUsed = {};
//   }
// }
