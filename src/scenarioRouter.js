//updated layer hompage - ToolResult.js update 3.0
/*
SCENARIO ROUTER
---------------
Educational / System Intuition layer.

This layer:
- Does NOT use decision engine
- Does NOT calculate thresholds
- Explains models conceptually
- Can later include simulations

Safe separation from decision layer.
*/

export function loadScenario(type) {

  const title = document.getElementById("scenarioTitle");
  const description = document.getElementById("scenarioDescription");
  const content = document.getElementById("scenarioContent");

  const scenarios = {

    /* ============================================
       ANALYTICS
    ============================================ */
    analytics: {
      title: "📊 Analytics & Dashboards",
      description: "Why averages mislead in heavy-tailed systems.",
      content: `
        <h5>Heavy-Tail Behavior</h5>
        <p>In many systems, a small percentage of items dominate total impact.</p>
        <p><b>Example:</b> 20% of users may generate 80% of revenue.</p>
        <p>Mean values can misrepresent typical experience.</p>
      `
    },

    /* ============================================
       TRAFFIC
    ============================================ */
    traffic: {
      title: "🚦 Traffic & Queues",
      description: "Why congestion explodes near capacity.",
      content: `
        <h5>Utilization Threshold</h5>
        <p>When system utilization approaches ~85%, queues grow nonlinearly.</p>
        <p>Small increases in demand can create large delays.</p>
      `
    },

    /* ============================================
       VIRALITY
    ============================================ */
    virality: {
      title: "📈 Virality & Growth",
      description: "Why few items dominate attention.",
      content: `
        <h5>Power Law Scaling</h5>
        <p>Distribution often follows:</p>
        <p><b>P(x) ∝ x<sup>-α</sup></b></p>
        <p>Small α leads to extreme concentration.</p>
      `
    },

    /* ============================================
       GAMES
    ============================================ */
    games: {
      title: "🎮 Game Rewards & Loot",
      description: "Reward imbalance and perceived unfairness.",
      content: `
        <h5>Reward Distribution</h5>
        <p>Power-law reward systems create rare high-reward outcomes.</p>
        <p>Players perceive unfairness when tail events dominate value.</p>
      `
    },

    /* ============================================
       SERVERS
    ============================================ */
    servers: {
      title: "🖥️ Servers & Latency",
      description: "Load vs capacity and fragility threshold.",
      content: `
        <h5>Capacity Rule</h5>
        <p>Beyond ~85% utilization, systems enter fragility zone.</p>
        <p>Latency spikes occur due to queue buildup.</p>
      `
    },

    /* ============================================
       DISASTERS
    ============================================ */
    disasters: {
      title: "🌍 Disasters & Risk",
      description: "Why rare events dominate total damage.",
      content: `
        <h5>Tail Risk</h5>
        <p>In heavy-tailed systems, extreme events contribute most impact.</p>
        <p>Average outcomes understate real risk exposure.</p>
      `
    }

  };

  const scenario = scenarios[type];

  if (!scenario) {
    title.innerText = "Scenario not found.";
    description.innerText = "";
    content.innerHTML = "<p>Invalid scenario type.</p>";
    return;
  }

  title.innerText = scenario.title;
  description.innerText = scenario.description;
  content.innerHTML = scenario.content;
}





// extented update 2.0
/*
Scenario layer remains purely educational.
Does NOT interfere with decision engine.
*/

// export function loadScenario(type) {

//   const title = document.getElementById("scenarioTitle");
//   const description = document.getElementById("scenarioDescription");
//   const content = document.getElementById("scenarioContent");

//   const scenarios = {

//     analytics: {
//       title: "📊 Analytics",
//       description: "Heavy tails distort averages.",
//       content: `<p>Mean ≠ Typical. Outliers dominate totals in heavy-tailed systems.</p>`
//     },

//     traffic: {
//       title: "🚦 Traffic",
//       description: "Queues explode near capacity.",
//       content: `<p>Fragility begins near ~85% utilization.</p>`
//     },

//     virality: {
//       title: "📈 Virality",
//       description: "Few items dominate attention.",
//       content: `<p>Power-law scaling: P(x) ∝ x^-α</p>`
//     },

//     games: {
//       title: "🎮 Games",
//       description: "Reward inequality emerges naturally.",
//       content: `<p>Small α → extreme reward concentration.</p>`
//     },

//     servers: {
//       title: "🖥️ Servers",
//       description: "Latency spikes near load threshold.",
//       content: `<p>Utilization beyond ~85% → cascading delay risk.</p>`
//     },

//     disasters: {
//       title: "🌍 Disasters",
//       description: "Rare events dominate damage.",
//       content: `<p>Tail risk often outweighs average outcomes.</p>`
//     }

//   };

//   const s = scenarios[type];
//   if (!s) return;

//   title.innerText = s.title;
//   description.innerText = s.description;
//   content.innerHTML = s.content;
// }






// export function loadScenario(type) {
//   const title = document.getElementById("scenarioTitle");
//   const description = document.getElementById("scenarioDescription");
//   const content = document.getElementById("scenarioContent");

//   const scenarios = {

//     analytics: {
//       title: "📊 Analytics & Dashboards",
//       description: "Why averages mislead and heavy tails dominate.",
//       content: `
//         <h5>Mean vs Median</h5>
//         <p>In heavy-tailed systems, mean can be misleading.</p>
//         <p><b>Example:</b> If 1% of users generate most revenue, the average user does not represent typical behavior.</p>
//       `
//     },

//     money: {
//       title: "💰 Money & Income",
//       description: "Survivability, asymmetry, and structural risk.",
//       content: `
//         <h5>Financial Survivability</h5>
//         <p>Required Income ≈ Expenses × 12 × 1.2</p>
//         <p>This includes a 20% safety buffer.</p>
//       `
//     },

//     traffic: {
//       title: "🚦 Traffic & Queues",
//       description: "Why systems fail suddenly near capacity.",
//       content: `
//         <h5>Critical Utilization</h5>
//         <p>Fragility zone begins ≈ 85% of capacity.</p>
//         <p>Beyond this, small load increases cause queue explosion.</p>
//       `
//     },

//     games: {
//       title: "🎮 Game Rewards & Loot",
//       description: "Power-law rewards and perceived unfairness.",
//       content: `
//         <h5>Power Law Rewards</h5>
//         <p>Reward ∝ x^-α</p>
//         <p>Small α → extreme inequality.</p>
//       `
//     },

//     growth: {
//       title: "📈 Virality & Growth",
//       description: "Why a few items dominate attention.",
//       content: `
//         <h5>Scaling Behavior</h5>
//         <p>Distribution often follows heavy tail: P(x) ∝ x^-α</p>
//       `
//     },

//     servers: {
//       title: "🖥️ Servers & Latency",
//       description: "Load vs capacity and sudden latency spikes.",
//       content: `
//         <h5>Utilization Rule</h5>
//         <p>Load / Capacity ≥ 0.85 → instability risk rises sharply.</p>
//       `
//     },

//     risk: {
//       title: "🌍 Risk & Disasters",
//       description: "Why rare events dominate impact.",
//       content: `
//         <h5>Tail Risk</h5>
//         <p>In heavy-tailed systems, extreme events dominate total damage.</p>
//       `
//     }

//   };

//   const s = scenarios[type];

//   if (!s) {
//     title.innerText = "Scenario Not Found";
//     return;
//   }

//   title.innerText = s.title;
//   description.innerText = s.description;
//   content.innerHTML = s.content;
// }
