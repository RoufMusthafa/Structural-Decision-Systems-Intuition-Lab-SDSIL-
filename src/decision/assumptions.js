//updated layer hompage - assumptions.js update 2.0
/*
ASSUMPTION ENGINE
-----------------
Applies conservative defaults when user input is missing.
Does NOT fabricate optimistic values.
*/

import { getDefault } from "../data/defaults.js";

export function applyAssumptions(inputs) {

  const assumptions = {};

  /* =====================================
     Monthly expense fallback
     If salary exists but expenses missing,
     assume expenseRatio of salary.
  ====================================== */

  if (inputs.salary && !inputs.monthlyExpenses) {

    const ratio = getDefault("expenseRatio");

    assumptions.monthlyExpenses = {
      value: Math.round((inputs.salary * ratio) / 12),
      reason: "Applied conservative expense ratio assumption."
    };
  }

  /* =====================================
     Default reversibility assumption
  ====================================== */

  if (inputs.canQuitEarly == null) {

    assumptions.canQuitEarly = {
      value: getDefault("canQuitEarly"),
      reason: "Conservative default applied."
    };
  }

  return assumptions;
}







// import { getDefault } from "../data/defaults.js";

// export function applyAssumptions(i) {
//   const a = {};
//   if (i.salary && i.monthlyExpenses == null)
//     a.monthlyExpenses = { value: Math.round(i.salary * getDefault("expenseRatio") / 12) };
//   if (i.canQuitEarly == null) a.canQuitEarly = { value: getDefault("canQuitEarly") };
//   if (i.skillGrowth == null) a.skillGrowth = { value: getDefault("skillGrowth") };
//   return a;
// }





// import { getDefault } from "../data/defaults.js";

// export function applyAssumptions(inputs) {
//   const assumptions = {};

//   if (inputs.monthlyExpenses == null && inputs.salary != null) {
//     const ratio = getDefault("expenseRatioOfIncome");
//     assumptions.monthlyExpenses = {
//       value: Math.round((inputs.salary * ratio) / 12),
//       reason: "Assumed from income ratio",
//       source: "default"
//     };
//   }

//   if (inputs.canQuitEarly == null) {
//     assumptions.canQuitEarly = {
//       value: getDefault("canQuitEarly"),
//       reason: "Conservative default",
//       source: "default"
//     };
//   }

//   if (inputs.skillGrowth == null) {
//     assumptions.skillGrowth = {
//       value: getDefault("skillGrowth"),
//       reason: "Neutral assumption",
//       source: "default"
//     };
//   }

//   return assumptions;
// }
