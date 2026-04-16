// src/pages/AllPanels.jsx

import { useState } from "react";
import { NavWorkflowsPanel } from "../panels/NavWorkflowsPanel";
import { CapitalEventsPanel } from "../panels/CapitalEventsPanel";
import { ReportsPanel } from "../panels/ReportsPanel";
import { PaymentsPanel } from "../panels/PaymentsPanel";
import OtherWorkflowsPanel from "../panels/OtherWorkFlowsPanel";

export default function AllPanels({setSelected}) {

  return (
    <div className="main">

      {/* NAV FULL WIDTH */}
            <div className="col-full">
        <NavWorkflowsPanel onRowClick={setSelected} />
      </div>
      <OtherWorkflowsPanel/>

      {/* ROW 2 */}
      <CapitalEventsPanel />
      <ReportsPanel />

      {/* FULL WIDTH */}
      <PaymentsPanel />

    </div>
  );
}