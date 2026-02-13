//updated layer hompage - syntesisEngine.js update 3.0
/*
SYNTHESIS ENGINE
----------------
Converts tool results into numeric, human-readable explanation.
NO hardcoded thresholds.
Everything imported from data layer.
*/

import { Synthesis } from "../domain/Synthesis.js";

export function synthesize(decision, tools, confidence) {

  const s = new Synthesis();
  s.confidence = confidence;
  s.assumptionsUsed = decision.assumptions;

  /* =====================================================
     JOB
  ===================================================== */

  if (decision.problemType === "job_offer") {

    const tool = tools.find(t => t.toolName === "survivability");

    if (tool && tool.findings.requiredAnnual) {

      const threshold = Math.round(tool.findings.requiredAnnual);

      s.summaryPoints.push(
        `Estimated survivability threshold: ~₹${threshold.toLocaleString()} annual income.`
      );

      if (!tool.findings.safe) {
        s.dominantRisks.push(
          "Income currently below structural survivability threshold."
        );
      }
    }
  }

  /* =====================================================
     INVESTMENT
  ===================================================== */

  if (decision.problemType === "investment") {

    const tool = tools.find(t => t.toolName === "investment_exposure");

    if (tool && tool.findings.maxSafeInvestment) {

      const maxSafe = Math.round(tool.findings.maxSafeInvestment);

      s.summaryPoints.push(
        `Maximum structurally safe exposure: ~₹${maxSafe.toLocaleString()} based on total net worth.`
      );

      if (!tool.findings.safe) {
        s.dominantRisks.push(
          "Investment size exceeds structural ruin-prevention threshold."
        );
      }
    }
  }

  /* =====================================================
     SYSTEM DESIGN
  ===================================================== */

  if (decision.problemType === "system_design") {

    const tool = tools.find(t => t.toolName === "system_fragility");

    if (tool && tool.findings.criticalLoad) {

      const critical = Math.round(tool.findings.criticalLoad);

      s.summaryPoints.push(
        `Fragility zone begins near load ≈ ${critical}.`
      );

      if (tool.findings.overloaded) {
        s.dominantRisks.push(
          `Operating beyond ~${tool.findings.shockRange} load shock tolerance zone.`
        );
      }
    }
  }

  return s;
}






// latest update 2.0
// import { Synthesis } from "../domain/Synthesis.js";

/**
 * Synthesis Engine
 * ----------------
 * Converts tool outputs + derived thresholds into
 * human-understandable, numerically anchored explanations.
 *
 * IMPORTANT:
 * - No advice ("you should")
 * - No predictions
 * - Only constraints and thresholds
 */

// export function synthesize(decision, tools, confidence) {
//   const s = new Synthesis();
//   s.confidence = confidence;
//   s.assumptionsUsed = decision.assumptions;

//     ============================================================
//      JOB / CAREER DECISION
//     ============================================================
//   if (decision.problemType === "job_offer") {
//     const survivability = tools.find(t => t.toolName === "survivability");

//     const monthlyExpenses =
//       decision.inputs.monthlyExpenses ??
//       decision.assumptions.monthlyExpenses?.value;

//     Safety margin heuristic (20%)
//     const SAFETY_MARGIN = 1.2;

//     const requiredAnnualIncome = Math.round(
//       monthlyExpenses * 12 * SAFETY_MARGIN
//     );

//     if (!survivability.findings.safe) {
//       s.dominantRisks.push("Income does not cover typical living costs");

//       s.summaryPoints.push(
//         `With your stated expense structure, annual income below ~₹${requiredAnnualIncome.toLocaleString()} struggles to remain financially survivable under typical conditions.`
//       );

//       s.summaryPoints.push(
//         `At income levels above ~₹${requiredAnnualIncome.toLocaleString()}, the same expense profile becomes structurally more resilient without relying on best-case assumptions.`
//       );
//     } else {
//       s.summaryPoints.push(
//         `Your income exceeds the estimated survivability threshold of ~₹${requiredAnnualIncome.toLocaleString()} given current expenses and assumptions.`
//       );
//     }
//   }

//     ============================================================
//      INVESTMENT DECISION
//     ============================================================
//   if (decision.problemType === "investment") {
//     const survivability = tools.find(
//       t => t.toolName === "investment_survivability"
//     );

//     const asymmetry = tools.find(t => t.toolName === "asymmetry");

//     if (decision.inputs.netWorth != null) {
//       // Conservative ruin-prevention heuristic
//       const MAX_EXPOSURE_RATIO = 0.20;

//       const maxSafeInvestment = Math.round(
//         decision.inputs.netWorth * MAX_EXPOSURE_RATIO
//       );

//       if (survivability.findings.survivable === false) {
//         s.dominantRisks.push("Investment size risks permanent loss");

//         s.summaryPoints.push(
//           `Given your stated net worth, investment sizes above ~₹${maxSafeInvestment.toLocaleString()} increase the risk of irreversible loss.`
//         );

//         s.summaryPoints.push(
//           `Position sizes below ~₹${maxSafeInvestment.toLocaleString()} reduce downside fragility without requiring assumptions about future returns.`
//         );
//       } else {
//         s.summaryPoints.push(
//           `Your stated investment size falls below the estimated survivability threshold of ~₹${maxSafeInvestment.toLocaleString()} based on total net worth.`
//         );
//       }
//     }

//     if (asymmetry && asymmetry.findings.ratio < 1) {
//       s.dominantRisks.push("Downside outweighs upside in typical outcomes");

//       s.summaryPoints.push(
//         `The upside-to-downside ratio (~${asymmetry.findings.ratio.toFixed(
//           2
//         )}) indicates that losses grow faster than gains when outcomes are unfavorable.`
//       );
//     }
//   }

//      ============================================================
//      SYSTEM / INCENTIVE DESIGN
//      ============================================================ 
//   if (decision.problemType === "system_design") {
//     const fragility = tools.find(t => t.toolName === "system_fragility");

//     if (fragility && fragility.findings.status !== "unknown") {
//       const { overloaded, capacity, load } = fragility.findings;

//       // Buffer heuristic: critical zone starts at ~85% capacity
//       const BUFFER_THRESHOLD = 0.85;
//       const criticalLoad = Math.round(capacity * BUFFER_THRESHOLD);

//       if (overloaded) {
//         s.dominantRisks.push("System operating at or beyond capacity");

//         s.summaryPoints.push(
//           `With capacity at ${capacity}, sustained load beyond ~${criticalLoad} (≈85%) places the system in a fragile operating zone.`
//         );

//         s.summaryPoints.push(
//           `Beyond this threshold, load increases of even ~5–10% can trigger disproportionately large failures rather than gradual degradation.`
//         );
//       } else {
//         s.summaryPoints.push(
//           `Current load (${load}) remains below the estimated fragility threshold of ~${criticalLoad}, indicating available buffer under typical conditions.`
//         );
//       }
//     }
//   }

//      ============================================================
//      FALLBACK
//      ============================================================ 
//   if (s.summaryPoints.length === 0 && s.dominantRisks.length === 0) {
//     s.summaryPoints.push(
//       "No major structural risks were detected under the provided inputs and assumptions."
//     );
//   }

//   return s;
// }






// updated
// export function synthesize(decision, tools, confidence) {
//   const s = new Synthesis();
//   s.confidence = confidence;
//   s.assumptionsUsed = decision.assumptions;

//   /* ---------- JOB OFFER ---------- */
//   if (decision.problemType === "job_offer") {
//     const surv = tools.find(t => t.toolName === "survivability");

//     const expenses =
//       decision.inputs.monthlyExpenses ??
//       decision.assumptions.monthlyExpenses?.value;

//     const requiredSalary = Math.round(expenses * 12 * 1.2);

//     if (!surv.findings.safe) {
//       s.dominantRisks.push("Income may not cover typical living costs");

//       s.summaryPoints.push(
//         `With your stated expenses, incomes below ~₹${requiredSalary.toLocaleString()} struggle to be financially survivable.`
//       );

//       s.summaryPoints.push(
//         "At higher income levels, the same expense structure becomes structurally safer."
//       );
//     } else {
//       s.summaryPoints.push(
//         "Income appears sufficient to cover typical expenses under current assumptions."
//       );
//     }
//   }

//   /* ---------- INVESTMENT ---------- */
//   if (decision.problemType === "investment") {
//     const surv = tools.find(t => t.toolName === "investment_survivability");

//     if (decision.inputs.netWorth) {
//       const maxSafe = Math.round(decision.inputs.netWorth * 0.2);

//       if (surv.findings.survivable === false) {
//         s.dominantRisks.push("Investment size risks permanent loss");

//         s.summaryPoints.push(
//           `At your stated net worth, investments above ~₹${maxSafe.toLocaleString()} increase fragility.`
//         );

//         s.summaryPoints.push(
//           "Smaller position sizes reduce downside risk without requiring return assumptions."
//         );
//       } else {
//         s.summaryPoints.push(
//           "Investment size appears structurally survivable under current assumptions."
//         );
//       }
//     }
//   }

//   if (decision.problemType === "system_design") {
//     const frag = tools.find(t => t.toolName === "system_fragility");

//     if (frag?.findings.overloaded) {
//       s.dominantRisks.push("System operates near or beyond capacity");

//       if (!frag.findings.hasBuffer) {
//         s.summaryPoints.push(
//           "Systems without buffers tend to fail abruptly rather than gradually."
//         );
//       }

//       s.summaryPoints.push(
//         "Small increases in load can trigger disproportionately large failures."
//       );
//     } else {
//       s.summaryPoints.push(
//         "System load appears within capacity under stated assumptions."
//       );
//     }
//   }

//   return s;
// }






// export function synthesize(d, tools, conf) {
//   const s = new Synthesis();
//   s.confidence = conf;
//   s.assumptionsUsed = d.assumptions;

//   tools.forEach(t => {
//     if (t.toolName === "survivability" && !t.findings.safe)
//       s.dominantRisks.push("Income may not cover expenses");

//     if (t.toolName === "investment_survivability" && t.findings.survivable === false)
//       s.dominantRisks.push("Investment risks permanent loss");
//   });

//   if (!s.dominantRisks.length)
//     s.summaryPoints.push("No major structural risks detected");

//   return s;
// }





// // import { Synthesis } from "../domain/Synthesis.js";

// // export function synthesize(decision, toolResults, confidence) {
// //   const s = new Synthesis();

// //   const survivability = toolResults.find(t => t.toolName === "survivability");

// //   if (survivability.findings.safe) {
// //     s.summaryPoints.push("Financially survivable under typical conditions");
// //   } else {
// //     s.dominantRisks.push("Income may not cover expenses");
// //   }

// //   if (decision.reversibility === "irreversible") {
// //     s.dominantRisks.push("Low flexibility due to lock-in");
// //   }

// //   s.confidence = confidence;
// //   s.assumptionsUsed = decision.assumptions;

// //   return s;
// // }

// import { Synthesis } from "../domain/Synthesis.js";

// export function synthesize(decision, toolResults, confidence) {
//   const s = new Synthesis();

//   /* ---------- JOB OFFER ---------- */
//   if (decision.problemType === "job_offer") {
//     const surv = toolResults.find(t => t.toolName === "survivability");

//     if (surv?.findings.safe) {
//       s.summaryPoints.push("Financially survivable under typical conditions");
//     } else {
//       s.dominantRisks.push("Income may not cover expenses");
//     }

//     if (decision.reversibility === "irreversible") {
//       s.dominantRisks.push("Low flexibility due to lock-in");
//     }
//   }

//   /* ---------- INVESTMENT ---------- */
//   if (decision.problemType === "investment") {
//     const surv = toolResults.find(t => t.toolName === "investment_survivability");
//     const asym = toolResults.find(t => t.toolName === "asymmetry");

//     if (surv?.findings.survivable === false) {
//       s.dominantRisks.push("Investment size risks permanent loss");
//     }

//     if (asym?.flags.includes("negative_asymmetry")) {
//       s.dominantRisks.push("Downside outweighs upside in typical outcomes");
//     }

//     if (s.dominantRisks.length === 0) {
//       s.summaryPoints.push(
//         "Investment appears structurally survivable under stated assumptions"
//       );
//     }
//   }

//   s.confidence = confidence;
//   s.assumptionsUsed = decision.assumptions;

//   return s;
// }
