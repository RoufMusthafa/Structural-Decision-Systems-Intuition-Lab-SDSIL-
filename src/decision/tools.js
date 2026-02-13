//updated layer hompage - tools.js update 2.0
/*
TOOLS
-----
Pure structural checks.
No advice.
No predictions.
Uses centralized thresholds.
*/

import { ToolResult } from "../domain/ToolResult.js";
import { getThreshold } from "../data/thresholds.js";
import { getHeuristic } from "../data/heuristics.js";

/* =====================================================
   JOB SURVIVABILITY TOOL
===================================================== */

export function survivabilityTool(decision) {

  const safetyMargin = getThreshold("safetyMargin");

  const monthly =
    decision.inputs.monthlyExpenses ??
    decision.assumptions.monthlyExpenses?.value;

  if (!decision.inputs.salary || !monthly) {
    return new ToolResult("survivability", { status: "insufficient_data" });
  }

  const requiredAnnual = monthly * 12 * safetyMargin;

  const safe = decision.inputs.salary >= requiredAnnual;

  return new ToolResult("survivability", {
    safe,
    requiredAnnual
  });
}

/* =====================================================
   INVESTMENT EXPOSURE TOOL
===================================================== */

export function investmentExposureTool(decision) {

  const maxRatio = getThreshold("maxExposureRatio");

  const { investmentAmount, netWorth } = decision.inputs;

  if (!investmentAmount || !netWorth) {
    return new ToolResult("investment_exposure", { status: "insufficient_data" });
  }

  const exposureRatio = investmentAmount / netWorth;
  const maxSafeInvestment = netWorth * maxRatio;

  const safe = exposureRatio <= maxRatio;

  return new ToolResult("investment_exposure", {
    safe,
    exposureRatio,
    maxSafeInvestment
  });
}

/* =====================================================
   SYSTEM FRAGILITY TOOL
===================================================== */

export function systemFragilityTool(decision) {

  const criticalUtilization = getThreshold("criticalUtilization");

  const { load, capacity } = decision.inputs;

  if (!load || !capacity) {
    return new ToolResult("system_fragility", { status: "insufficient_data" });
  }

  const utilization = load / capacity;
  const criticalLoad = capacity * criticalUtilization;

  const overloaded = utilization >= criticalUtilization;

  return new ToolResult("system_fragility", {
    overloaded,
    utilization,
    criticalLoad,
    shockRange: getHeuristic("smallLoadShockRange")
  });
}







// import { ToolResult } from "../domain/ToolResult.js";

// export const survivabilityTool = d =>
//   new ToolResult("survivability", {
//     safe: d.inputs.salary >=
//       ((d.inputs.monthlyExpenses ?? d.assumptions.monthlyExpenses?.value) * 12)
//   });

// export const investmentSurvivabilityTool = d =>
//   new ToolResult("investment_survivability", {
//     survivable: d.inputs.netWorth
//       ? (d.inputs.investmentAmount / d.inputs.netWorth <= 0.2)
//       : "unknown"
//   });

// export const asymmetryTool = d =>
//   new ToolResult("asymmetry", {
//     ratio: d.inputs.upsideGain / d.inputs.downsideLoss
// });



// // updated
// export function systemFragilityTool(decision) {
//   const load = decision.inputs.load;
//   const capacity = decision.inputs.capacity;
//   const buffer = decision.inputs.buffer;

//   if (load == null || capacity == null) {
//     return new ToolResult("system_fragility", { status: "unknown" });
//   }

//   const overloaded = load >= capacity;
//   const hasBuffer = buffer && buffer > 0;

//   return new ToolResult("system_fragility", {
//     overloaded,
//     hasBuffer
//   });
// }


// import { ToolResult } from "../domain/ToolResult.js";

// /* ---------- JOB OFFER TOOL (already exists) ---------- */
// export function survivabilityTool(decision) {
//   const salary = decision.inputs.salary;
//   const expenses =
//     decision.inputs.monthlyExpenses ??
//     decision.assumptions.monthlyExpenses?.value;

//   const safe = salary >= expenses * 12;

//   return new ToolResult(
//     "survivability",
//     { safe, margin: salary - expenses * 12 },
//     safe ? [] : ["unsustainable"]
//   );
// }

// /* ---------- INVESTMENT TOOLS ---------- */

// export function investmentSurvivabilityTool(decision) {
//   const investAmt = decision.inputs.investmentAmount;
//   const netWorth = decision.inputs.netWorth;

//   if (netWorth == null) {
//     return new ToolResult(
//       "investment_survivability",
//       { survivable: "unknown" },
//       ["missing_net_worth"],
//       "medium"
//     );
//   }

//   const ratio = investAmt / netWorth;
//   const survivable = ratio <= 0.2; // 20% rule (conservative)

//   return new ToolResult(
//     "investment_survivability",
//     { survivable, exposureRatio: ratio },
//     survivable ? [] : ["overexposed"],
//     survivable ? "low" : "high"
//   );
// }

// export function asymmetryTool(decision) {
//   const downside = decision.inputs.downsideLoss;
//   const upside = decision.inputs.upsideGain;

//   if (downside == null || upside == null) {
//     return new ToolResult(
//       "asymmetry",
//       { asymmetry: "unknown" },
//       ["missing_asymmetry_data"],
//       "medium"
//     );
//   }

//   const asymmetry = upside / downside;

//   return new ToolResult(
//     "asymmetry",
//     { asymmetry },
//     asymmetry < 1 ? ["negative_asymmetry"] : [],
//     "low"
//   );
// }
