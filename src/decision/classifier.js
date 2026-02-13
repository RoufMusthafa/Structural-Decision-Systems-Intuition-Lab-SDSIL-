//updated layer hompage - classifier.js update 2.0
/*
CLASSIFIER
----------
Assigns structural properties to the decision.
Does NOT evaluate outcome.
*/

export function classifyDecision(decision) {

  if (decision.problemType === "job_offer") {

    decision.timeframe = "long";
    decision.repeatability = "repeatable";
    decision.reversibility =
      decision.inputs.canQuitEarly ?? false
        ? "partial"
        : "irreversible";
  }

  if (decision.problemType === "investment") {

    decision.timeframe = "medium";
    decision.repeatability = "repeatable";
    decision.reversibility = "reversible";
  }

  if (decision.problemType === "system_design") {

    decision.timeframe = "long";
    decision.repeatability = "repeatable";
    decision.reversibility = "irreversible";
  }
}


// export function classifyDecision(d) {
//   if (d.problemType === "job_offer") {
//     d.timeframe = "long";
//     d.repeatability = "repeatable";
//     d.reversibility = (d.inputs.canQuitEarly ?? d.assumptions.canQuitEarly.value)
//       ? "partial" : "irreversible";
//   }
//   if (d.problemType === "investment") {
//     d.timeframe = "medium";
//     d.repeatability = "one-shot";
//     d.reversibility = "reversible";
//   }
//   // if (decision.problemType === "system_design") {
//   //   decision.timeframe = "long";
//   //   decision.repeatability = "repeatable";
//   //   decision.reversibility = "irreversible";
//   // }

// }



// export function classifyDecision(decision) {
//   decision.timeframe = "medium";
//   decision.repeatability = "one-shot";
//   decision.reversibility = "partial";

//   if (decision.problemType === "job_offer") {
//     decision.timeframe = "long";
//     decision.repeatability = "repeatable";

//     const canQuit =
//       decision.inputs.canQuitEarly ??
//       decision.assumptions.canQuitEarly?.value;

//     decision.reversibility = canQuit ? "partial" : "irreversible";
//   }

//   return decision;
// }
