//updated layer hompage - ToolResult.js update 3.0
/*
APP.JS
------
Main orchestration layer for decision engine.

Responsibilities:
- Construct Decision object
- Apply assumptions
- Classify structure
- Execute relevant tools
- Compute confidence
- Run synthesis

No UI logic.
No hardcoded numbers.
Pure coordination.
*/

import { Decision } from "./domain/Decision.js";

import { applyAssumptions } from "./decision/assumptions.js";
import { classifyDecision } from "./decision/classifier.js";

import {
  survivabilityTool,
  investmentExposureTool,
  systemFragilityTool
} from "./decision/tools.js";

import { computeConfidence } from "./decision/confidence.js";
import { synthesize } from "./decision/synthesisEngine.js";


export function runDecision(problemType, inputs) {

  /* ============================================
     1️⃣ Apply conservative assumptions
  ============================================ */
  const assumptions = applyAssumptions(inputs);

  /* ============================================
     2️⃣ Construct domain model
  ============================================ */
  const decision = new Decision(problemType, inputs, assumptions);

  /* ============================================
     3️⃣ Structural classification
  ============================================ */
  classifyDecision(decision);

  /* ============================================
     4️⃣ Execute relevant tools
  ============================================ */
  let tools = [];

  if (problemType === "job_offer") {
    tools.push(survivabilityTool(decision));
  }

  if (problemType === "investment") {
    tools.push(investmentExposureTool(decision));
  }

  if (problemType === "system_design") {
    tools.push(systemFragilityTool(decision));
  }

  /* ============================================
     5️⃣ Compute confidence level
  ============================================ */
  const confidence = computeConfidence(inputs);

  /* ============================================
     6️⃣ Synthesize explanation
  ============================================ */
  const result = synthesize(decision, tools, confidence);

  return result;
}




//updated 2.0
// import { Decision } from "./domain/Decision.js";
// import { applyAssumptions } from "./decision/assumptions.js";
// import { classifyDecision } from "./decision/classifier.js";
// import { survivabilityTool, investmentSurvivabilityTool, asymmetryTool } from "./decision/tools.js";
// import { computeConfidence } from "./decision/confidence.js";
// import { synthesize } from "./decision/synthesisEngine.js";

// export function runDecision(problemType, inputs) {
//   const assumptions = applyAssumptions(inputs);
//   const decision = new Decision(problemType, inputs, assumptions);

//   classifyDecision(decision);

//   let tools = [];
//   if (problemType === "job_offer") tools.push(survivabilityTool(decision));
//   if (problemType === "investment") {
//     tools.push(investmentSurvivabilityTool(decision));
//     tools.push(asymmetryTool(decision));
//   }

//   return synthesize(decision, tools, computeConfidence(inputs));
// }





// import { Decision } from "./domain/Decision.js";
// import { applyAssumptions } from "./decision/assumptions.js";
// import { classifyDecision } from "./decision/classifier.js";
// // import { survivabilityTool } from "./decision/tools.js";
// import { computeConfidence } from "./decision/confidence.js";
// import { synthesize } from "./decision/synthesisEngine.js";
// import {
//   survivabilityTool,
//   investmentSurvivabilityTool,
//   asymmetryTool
// } from "./decision/tools.js";

// export function runDecision(problemType, inputs) {
//   const assumptions = applyAssumptions(inputs);
//   const decision = new Decision({ problemType, inputs, assumptions });

//   classifyDecision(decision);

//   const tools = [survivabilityTool(decision)];
//   const confidence = computeConfidence(inputs);

//   return synthesize(decision, tools, confidence);
// }



// export function runDecision(problemType, inputs) {
//   const assumptions = applyAssumptions(inputs);
//   const decision = new Decision({ problemType, inputs, assumptions });

//   classifyDecision(decision);

//   let tools = [];

//   if (problemType === "job_offer") {
//     tools = [survivabilityTool(decision)];
//   }

//   if (problemType === "investment") {
//     tools = [
//       investmentSurvivabilityTool(decision),
//       asymmetryTool(decision)
//     ];
//   }

//   const confidence = computeConfidence(inputs);
//   return synthesize(decision, tools, confidence);
// }
