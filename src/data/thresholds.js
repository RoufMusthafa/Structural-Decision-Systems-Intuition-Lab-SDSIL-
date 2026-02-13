//updated layer hompage - threshold.js update 2.0

/*
THRESHOLDS
----------
Structural safety limits used in decision logic.
These are not predictions — they are guardrails.
*/

export const THRESHOLDS = {

  /* Financial survivability buffer:
     20% margin to prevent collapse from shocks.
  */
  safetyMargin: 1.2,

  /* Investment exposure limit:
     Prevents risk of ruin.
     Max 20% of total net worth.
  */
  maxExposureRatio: 0.20,

  /* System fragility threshold:
     Capacity utilization beyond 85%
     enters nonlinear risk zone.
  */
  criticalUtilization: 0.85

};


/*
Safe getter utility.
*/

export function getThreshold(key) {
  return THRESHOLDS[key];
}


// update 1.0
// export const CONFIDENCE = { low: 1, medium: 2, high: 3 };


// export const THRESHOLDS = {
//   salaryTypicalRange: {
//     belowTypical: 400000,
//     typicalUpper: 700000
//   },
//   confidenceLevels: {
//     low: 1,
//     medium: 2,
//     high: 3
//   }
// };

// export function getThreshold(category, key) {
//   return key ? THRESHOLDS[category]?.[key] : THRESHOLDS[category];
// }
