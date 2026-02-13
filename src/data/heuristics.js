// newly added file in update 2.0
/*
HEURISTICS
----------
Qualitative reasoning constants used for explanation.
These do not alter decision logic,
only improve explanatory clarity.
*/

export const HEURISTICS = {

  /*
   Estimated small-load shock range
   used in system fragility explanations.
  */
  smallLoadShockRange: "5–10%",

  /*
   Typical asymmetry warning boundary.
   Ratio below 1 means downside > upside.
  */
  negativeAsymmetryBoundary: 1

};


/*
Optional getter (future-safe)
*/

export function getHeuristic(key) {
  return HEURISTICS[key];
}
