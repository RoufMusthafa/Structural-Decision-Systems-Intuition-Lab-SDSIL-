//updated layer hompage - default.js update 2.0

/*
DEFAULT VALUES
--------------
Used when user input is missing.
Keeps system conservative and deterministic.
*/

export const DEFAULTS = {

  /* Expense assumption:
     If monthly expenses are missing,
     assume 50% of annual salary.
  */
  expenseRatio: 0.5,

  /* Conservative assumptions for decision stability */
  canQuitEarly: false,

  skillGrowth: "medium"

};


/*
Helper function to retrieve defaults safely.
Prevents undefined access in other modules.
*/

export function getDefault(key) {
  return DEFAULTS[key];
}




// export const DEFAULTS = {
//   expenseRatioOfIncome: 0.5,
//   canQuitEarly: false,
//   skillGrowth: "medium",
//   probabilityOfBetterOffer: 0.1,
//   financialSafetyMargin: 1.2
// };

// export function getDefault(key) {
//   return DEFAULTS[key];
// }
