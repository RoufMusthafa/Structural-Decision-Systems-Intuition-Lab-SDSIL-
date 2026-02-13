//updated layer hompage - confidence.js update 2.0
/*
CONFIDENCE ENGINE
-----------------
Reflects how much input data was provided.
Does NOT measure correctness.
*/

export function computeConfidence(inputs) {

  let score = 0;

  if (inputs.salary) score++;
  if (inputs.monthlyExpenses) score++;
  if (inputs.investmentAmount) score++;
  if (inputs.netWorth) score++;
  if (inputs.load) score++;
  if (inputs.capacity) score++;

  if (score >= 4) return "high";
  if (score >= 2) return "medium";

  return "low";
}






// export function computeConfidence(i) {
//   let c = i.salary ? 1 : 0;
//   if (i.monthlyExpenses) c++;
//   if (i.canQuitEarly || i.skillGrowth) c++;
//   return c >= 3 ? "high" : c === 2 ? "medium" : "low";
// }

// import { getThreshold } from "../data/thresholds.js";

// export function computeConfidence(inputs) {
//   let count = 1; // salary is anchor

//   if (inputs.monthlyExpenses != null) count++;
//   if (inputs.canQuitEarly != null || inputs.skillGrowth != null) count++;

//   if (count >= getThreshold("confidenceLevels", "high")) return "high";
//   if (count >= getThreshold("confidenceLevels", "medium")) return "medium";
//   return "low";
// }
