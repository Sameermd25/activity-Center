// import { useState } from "react";

// export function Modal({ data, onClose }) {
//     const [tab, setTab] = useState("overview");

//     if (!data) return null;

//     return (
//         <div className="overlay" onClick={onClose}>
//             <div
//                 className="modal large"
//                 onClick={(e) => e.stopPropagation()}  //  IMPORTANT
//             >

//                 {/* HEADER */}
//                 <div className="modal-header">
//                     <div>
//                         <div className="modal-title">
//                             {data.fund} – {data.workflow}
//                         </div>
//                         <div className="modal-sub">
//                             {data.entity} · Value date: {data.valueDate}
//                         </div>
//                     </div>

//                     <button className="modal-close" onClick={onClose}>×</button>
//                 </div>

//                 {/* TABS */}
//                 <div className="modal-tabs">
//                     {["overview", "capital", "recon", "navpack"].map(t => (
//                         <div
//                             key={t}
//                             className={`mtab ${tab === t ? "active" : ""}`}
//                             onClick={() => setTab(t)}
//                         >
//                             {t === "overview" && "Overview"}
//                             {t === "capital" && "Capital Balance"}
//                             {t === "recon" && "Reconciliation"}
//                             {t === "navpack" && "NAV Pack"}
//                         </div>
//                     ))}
//                 </div>

//                 {/* BODY */}
//                 <div className="modal-body">

//                     {/* ================= OVERVIEW ================= */}
//                     {tab === "overview" && (
//                         <>
//                             {/* KPI ROW */}
//                             <div className="kpi-row">
//                                 <div className="kpi-card">
//                                     <div className="kpi-label">SUBSCRIPTIONS (YTD)</div>
//                                     <div className="kpi-val">$33.0M</div>
//                                     <div className="kpi-sub">Net: $32.34M</div>
//                                 </div>

//                                 <div className="kpi-card">
//                                     <div className="kpi-label">REDEMPTIONS (YTD)</div>
//                                     <div className="kpi-val">$5.0M</div>
//                                     <div className="kpi-sub">Net: $5.05M</div>
//                                 </div>

//                                 <div className="kpi-card">
//                                     <div className="kpi-label">WORKFLOW PROGRESS</div>
//                                     <div className="kpi-val">{data.progress}%</div>
//                                     <div className="kpi-sub">8 of 11 steps done</div>
//                                 </div>

//                                 <div className="kpi-card">
//                                     <div className="kpi-label">PENDING ACTIONS</div>
//                                     <div className="kpi-val">2</div>
//                                     <div className="kpi-sub">Client approval needed</div>
//                                 </div>
//                             </div>

//                             {/* WORKFLOW STEPS */}
//                             <div className="section-title">WORKFLOW STEPS</div>

//                             <div className="steps-grid">
//                                 <div className="step-card done">
//                                     <div className="step-icon">✓</div>
//                                     <div>
//                                         <div className="step-title">Pre period end checks</div>
//                                         <div className="step-sub">Completed</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card done">
//                                     <div className="step-icon">✓</div>
//                                     <div>
//                                         <div className="step-title">Transactions processing</div>
//                                         <div className="step-sub">Completed</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card done">
//                                     <div className="step-icon">✓</div>
//                                     <div>
//                                         <div className="step-title">Payable / Receivable</div>
//                                         <div className="step-sub">Completed</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card done">
//                                     <div className="step-icon">✓</div>
//                                     <div>
//                                         <div className="step-title">Capital and P&L</div>
//                                         <div className="step-sub">Completed</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card done">
//                                     <div className="step-icon">✓</div>
//                                     <div>
//                                         <div className="step-title">Reports review</div>
//                                         <div className="step-sub">Completed</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card done">
//                                     <div className="step-icon">✓</div>
//                                     <div>
//                                         <div className="step-title">Post NAV</div>
//                                         <div className="step-sub">Completed</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card warn">
//                                     <div className="step-icon">!</div>
//                                     <div>
//                                         <div className="step-title">Client approval – NAV</div>
//                                         <div className="step-sub">Awaiting client</div>
//                                     </div>
//                                 </div>

//                                 <div className="step-card warn">
//                                     <div className="step-icon">!</div>
//                                     <div>
//                                         <div className="step-title">Client approval – PCAP & FS</div>
//                                         <div className="step-sub">Awaiting client</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* INVESTOR CAPITAL TRACKING */}
//                             <div className="table-section">
//                                 <div className="section-title">INVESTOR CAPITAL TRACKING</div>

//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>Investor</th>
//                                             <th>Opening bal.</th>
//                                             <th>Subscriptions</th>
//                                             <th>Redemptions</th>
//                                             <th>P&L alloc.</th>
//                                             <th>Fees</th>
//                                             <th>Closing bal.</th>
//                                             <th>Status</th>
//                                         </tr>
//                                     </thead>

//                                     <tbody>
//                                         <tr>
//                                             <td>Investor A</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$10.0M</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$0.85M</td>
//                                             <td className="red">-$0.20M</td>
//                                             <td><strong>$10.65M</strong></td>
//                                             <td><span className="status-active">Active</span></td>
//                                         </tr>

//                                         <tr>
//                                             <td>Investor B</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$15.0M</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$1.29M</td>
//                                             <td className="red">-$0.30M</td>
//                                             <td><strong>$15.99M</strong></td>
//                                             <td><span className="status-active">Active</span></td>
//                                         </tr>

//                                         <tr>
//                                             <td>Investor C</td>
//                                             <td>$20.0M</td>
//                                             <td>$0.0M</td>
//                                             <td className="red">-$5.0M</td>
//                                             <td className="green">+$1.72M</td>
//                                             <td className="red">-$0.41M</td>
//                                             <td><strong>$16.31M</strong></td>
//                                             <td><span className="status-active">Active</span></td>
//                                         </tr>

//                                         <tr>
//                                             <td>Investor D</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$8.0M</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$0.22M</td>
//                                             <td className="red">-$0.16M</td>
//                                             <td><strong>$8.06M</strong></td>
//                                             <td><span className="status-active">Active</span></td>
//                                         </tr>

//                                         <tr>
//                                             <td>Investor E</td>
//                                             <td>$30.0M</td>
//                                             <td>$0.0M</td>
//                                             <td>$0.0M</td>
//                                             <td className="green">+$2.58M</td>
//                                             <td className="red">-$0.61M</td>
//                                             <td><strong>$31.97M</strong></td>
//                                             <td><span className="status-active">Active</span></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </>
//                     )}

//                     {/* OTHER TABS (placeholder) */}
//                     {tab === "capital" && <div>Capital Balance Content</div>}
//                     {tab === "recon" && <div>Reconciliation Content</div>}
//                     {tab === "navpack" && <div>NAV Pack Content</div>}

//                 </div>
//             </div>
//         </div>
//     );
// }


// export function Modal({ data, onClose }) {
//   if (!data) return null;

//   const steps = [
//     { title: "Pre period end checks", completed: true },
//     { title: "Transactions processing", completed: true },
//     { title: "Payable / Receivable", completed: true },
//     { title: "Capital and P&L", completed: true },
//     { title: "Reports review", completed: true },
//     { title: "Post NAV", completed: true },
//     { title: "Client approval – NAV", completed: false },
//     { title: "Client approval – PCAP & FS", completed: false },
//   ];

//   return (
//     <div className="overlay" onClick={onClose}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         {/* HEADER */}
//         <div className="modal-header">
//           <div>
//             <div className="title">{data.workflow}</div>
//             <div className="sub">
//               {data.entity} • Value date: {data.date}
//             </div>
//           </div>

//           <button onClick={onClose}>✕</button>
//         </div>

//         {/* KPI ROW */}
//         <div className="modal-body">
//           <div className="kpi-row">
//             <div className="kpi-card">
//               <div className="sub">SUBSCRIPTIONS (YTD)</div>
//               <div className="kpi-val">$33.0M</div>
//             </div>

//             <div className="kpi-card">
//               <div className="sub">REDEMPTIONS (YTD)</div>
//               <div className="kpi-val">$5.0M</div>
//             </div>

//             <div className="kpi-card">
//               <div className="sub">WORKFLOW PROGRESS</div>
//               <div className="kpi-val">{data.progress}%</div>
//             </div>

//             <div className="kpi-card">
//               <div className="sub">PENDING ACTIONS</div>
//               <div className="kpi-val">2</div>
//             </div>
//           </div>

//           {/* STEPS */}
//           <h4 style={{ marginTop: "20px" }}>WORKFLOW STEPS</h4>

//           <div className="steps-grid">
//             {steps.map((step, i) => (
//               <div
//                 key={i}
//                 className={`step-card ${step.completed ? "done" : "pending"}`}
//               >
//                 <div className="icon">
//                   {step.completed ? "✓" : "!"}
//                 </div>

//                 <div>
//                   <div>{step.title}</div>
//                   <div className="sub">
//                     {step.completed ? "Completed" : "Awaiting client"}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* TABLE */}
//           <h4 style={{ marginTop: "20px" }}>INVESTOR CAPITAL TRACKING</h4>

//           <table>
//             <thead>
//               <tr>
//                 <th>Investor</th>
//                 <th>P&L</th>
//                 <th>Fees</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Investor A</td>
//                 <td className="positive">+$0.85M</td>
//                 <td className="negative">-$0.20M</td>
//                 <td><span className="status-active">Active</span></td>
//               </tr>

//               <tr>
//                 <td>Investor B</td>
//                 <td className="positive">+$1.29M</td>
//                 <td className="negative">-$0.30M</td>
//                 <td><span className="status-active">Active</span></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Modal({ data, onClose }) {
//   if (!data) return null;

//   const steps = [
//     { title: "Pre period end checks", completed: true },
//     { title: "Transactions processing", completed: true },
//     { title: "Payable / Receivable", completed: true },
//     { title: "Capital and P&L", completed: true },
//     { title: "Reports review", completed: true },
//     { title: "Post NAV", completed: true },
//     { title: "Client approval – NAV", completed: false },
//     { title: "Client approval – PCAP & FS", completed: false },
//   ];

//   const investors = [
//     { name: "Investor A", open: "$0.0M", sub: "+$10.0M", red: "$0.0M", pnl: "+$0.85M", fees: "-$0.20M", close: "$10.65M" },
//     { name: "Investor B", open: "$0.0M", sub: "+$15.0M", red: "$0.0M", pnl: "+$1.29M", fees: "-$0.30M", close: "$15.99M" },
//     { name: "Investor C", open: "$20.0M", sub: "$0.0M", red: "-$5.0M", pnl: "+$1.72M", fees: "-$0.41M", close: "$16.31M" },
//     { name: "Investor D", open: "$0.0M", sub: "+$8.0M", red: "$0.0M", pnl: "+$0.22M", fees: "-$0.16M", close: "$8.06M" },
//     { name: "Investor E", open: "$30.0M", sub: "$0.0M", red: "$0.0M", pnl: "+$2.58M", fees: "-$0.61M", close: "$31.97M" },
//   ];

//   return (
//     <div className="overlay" onClick={onClose}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
        
//         {/* HEADER */}
//         <div className="modal-header">
//           <div>
//             <div className="title">{data.workflow}</div>
//             <div className="sub">
//               {data.entity} · Value date: {data.date}
//             </div>
//           </div>
//           <button onClick={onClose}>✕</button>
//         </div>

//         {/* TABS */}
//         <div className="modal-tabs">
//           <div className="mtab active">Overview</div>
//           <div className="mtab">Capital Balance</div>
//           <div className="mtab">Reconciliation</div>
//           <div className="mtab">NAV Pack</div>
//         </div>

//         <div className="modal-body">

//           {/* KPI */}
//           <div className="kpi-row">
//             <div className="kpi-card green">
//               <div className="sub">SUBSCRIPTIONS (YTD)</div>
//               <div className="kpi-val">$33.0M</div>
//               <div className="sub">Net: $32.34M</div>
//             </div>

//             <div className="kpi-card blue">
//               <div className="sub">REDEMPTIONS (YTD)</div>
//               <div className="kpi-val">$5.0M</div>
//               <div className="sub">Net: $5.05M</div>
//             </div>

//             <div className="kpi-card">
//               <div className="sub">WORKFLOW PROGRESS</div>
//               <div className="kpi-val">{data.progress}%</div>
//               <div className="sub">8 of 11 steps done</div>
//             </div>

//             <div className="kpi-card amber">
//               <div className="sub">PENDING ACTIONS</div>
//               <div className="kpi-val">2</div>
//               <div className="sub">Client approval needed</div>
//             </div>
//           </div>

//           {/* STEPS */}
//           <h4>WORKFLOW STEPS</h4>

//           <div className="steps-grid">
//             {steps.map((step, i) => (
//               <div
//                 key={i}
//                 className={`step-card ${step.completed ? "done" : "pending"}`}
//               >
//                 <div className="icon">
//                   {step.completed ? "✓" : "!"}
//                 </div>

//                 <div>
//                   <div>{step.title}</div>
//                   <div className="sub">
//                     {step.completed ? "Completed" : "Awaiting client"}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* TABLE */}
//           <h4>INVESTOR CAPITAL TRACKING</h4>

//           <table>
//             <thead>
//               <tr>
//                 <th>Investor</th>
//                 <th>Opening bal.</th>
//                 <th>Subscriptions</th>
//                 <th>Redemptions</th>
//                 <th>P&L alloc.</th>
//                 <th>Fees</th>
//                 <th>Closing bal.</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {investors.map((inv, i) => (
//                 <tr key={i}>
//                   <td>{inv.name}</td>
//                   <td>{inv.open}</td>
//                   <td className="positive">{inv.sub}</td>
//                   <td className="negative">{inv.red}</td>
//                   <td className="positive">{inv.pnl}</td>
//                   <td className="negative">{inv.fees}</td>
//                   <td><strong>{inv.close}</strong></td>
//                   <td><span className="status-active">Active</span></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export function Modal({ data, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!data) return null;

  const steps = [
    { title: "Pre period end checks", completed: true },
    { title: "Transactions processing", completed: true },
    { title: "Payable / Receivable", completed: true },
    { title: "Capital and P&L", completed: true },
    { title: "Reports review", completed: true },
    { title: "Post NAV", completed: true },
    { title: "Client approval – NAV", completed: false },
    { title: "Client approval – PCAP & FS", completed: false },
  ];

  const investors = [
    { name: "Investor A", open: "$0.0M", sub: "+$10.0M", red: "$0.0M", pnl: "+$0.85M", fees: "-$0.20M", close: "$10.65M" },
    { name: "Investor B", open: "$0.0M", sub: "+$15.0M", red: "$0.0M", pnl: "+$1.29M", fees: "-$0.30M", close: "$15.99M" },
    { name: "Investor C", open: "$20.0M", sub: "$0.0M", red: "-$5.0M", pnl: "+$1.72M", fees: "-$0.41M", close: "$16.31M" },
    { name: "Investor D", open: "$0.0M", sub: "+$8.0M", red: "$0.0M", pnl: "+$0.22M", fees: "-$0.16M", close: "$8.06M" },
    { name: "Investor E", open: "$30.0M", sub: "$0.0M", red: "$0.0M", pnl: "+$2.58M", fees: "-$0.61M", close: "$31.97M" },
  ];

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="modal-header">
          <div>
            <div className="title">{data.fund} – {data.workflow}</div>
            <div className="sub">
              {data.entity} · Value date: {data.date || "30 Sep 2025"}
            </div>
          </div>
          <button onClick={onClose}>✕</button>
        </div>

        {/* TABS */}
        <div className="modal-tabs">
          <div
            className={`mtab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </div>

          <div
            className={`mtab ${activeTab === "capital" ? "active" : ""}`}
            onClick={() => setActiveTab("capital")}
          >
            Capital Balance
          </div>

          <div
            className={`mtab ${activeTab === "recon" ? "active" : ""}`}
            onClick={() => setActiveTab("recon")}
          >
            Reconciliation
          </div>

          <div
            className={`mtab ${activeTab === "navpack" ? "active" : ""}`}
            onClick={() => setActiveTab("navpack")}
          >
            NAV Pack
          </div>
        </div>

        <div className="modal-body">

          {/* ================= OVERVIEW ================= */}
          {activeTab === "overview" && (
            <>
              {/* KPI */}
              <div className="kpi-row">
                <div className="kpi-card green">
                  <div className="sub">SUBSCRIPTIONS (YTD)</div>
                  <div className="kpi-val">$33.0M</div>
                  <div className="sub">Net: $32.34M</div>
                </div>

                <div className="kpi-card blue">
                  <div className="sub">REDEMPTIONS (YTD)</div>
                  <div className="kpi-val">$5.0M</div>
                  <div className="sub">Net: $5.05M</div>
                </div>

                <div className="kpi-card">
                  <div className="sub">WORKFLOW PROGRESS</div>
                  <div className="kpi-val">{data.progress}%</div>
                  <div className="sub">8 of 11 steps done</div>
                </div>

                <div className="kpi-card amber">
                  <div className="sub">PENDING ACTIONS</div>
                  <div className="kpi-val">2</div>
                  <div className="sub">Client approval needed</div>
                </div>
              </div>

              {/* STEPS */}
              <h4 style={{ marginTop: "20px" }}>WORKFLOW STEPS</h4>

              <div className="steps-grid">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`step-card ${step.completed ? "done" : "pending"}`}
                  >
                    <div className="icon">
                      {step.completed ? "✓" : "!"}
                    </div>

                    <div>
                      <div>{step.title}</div>
                      <div className="sub">
                        {step.completed ? "Completed" : "Awaiting client"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TABLE */}
              <h4 style={{ marginTop: "20px" }}>INVESTOR CAPITAL TRACKING</h4>

              <table>
                <thead>
                  <tr>
                    <th>Investor</th>
                    <th>Opening bal.</th>
                    <th>Subscriptions</th>
                    <th>Redemptions</th>
                    <th>P&L alloc.</th>
                    <th>Fees</th>
                    <th>Closing bal.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {investors.map((inv, i) => (
                    <tr key={i}>
                      <td>{inv.name}</td>
                      <td>{inv.open}</td>
                      <td className="positive">{inv.sub}</td>
                      <td className="negative">{inv.red}</td>
                      <td className="positive">{inv.pnl}</td>
                      <td className="negative">{inv.fees}</td>
                      <td><strong>{inv.close}</strong></td>
                      <td><span className="status-active">Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* ================= OTHER TABS ================= */}
          {activeTab === "capital" && (
            <div>
              <h3>Capital Balance</h3>
              <p>Capital balance details go here...</p>
            </div>
          )}

          {activeTab === "recon" && (
            <div>
              <h3>Reconciliation</h3>
              <p>Reconciliation data goes here...</p>
            </div>
          )}

          {activeTab === "navpack" && (
            <div>
              <h3>NAV Pack</h3>
              <p>NAV documents / reports go here...</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}