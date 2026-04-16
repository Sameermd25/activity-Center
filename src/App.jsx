import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { NavWorkflowsPanel } from "./panels/NavWorkflowsPanel";
import { CapitalEventsPanel } from "./panels/CapitalEventsPanel";
import { ReportsPanel } from "./panels/ReportsPanel";
import { PaymentsPanel } from "./panels/PaymentsPanel";
import { Modal } from "./components/Modal";
import AllPanels from "./pages/AllPanels";
import './App.css'
import OtherWorkflowsPanel from "./panels/OtherWorkFlowsPanel";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <NavBar />

      <Routes>
        {/* 👇 ALL DASHBOARD */}
        <Route path="/" element={<AllPanels setSelected={setSelected} />} />
        {/* INDIVIDUAL PAGES */}
        <Route path="/nav" element={<NavWorkflowsPanel onRowClick={setSelected} />} />
        <Route path="/other" element={<OtherWorkflowsPanel/>} />
        <Route path="/capital" element={<CapitalEventsPanel />} />
        <Route path="/reports" element={<ReportsPanel />} />
        <Route path="/payments" element={<PaymentsPanel />} />
      </Routes>

      <Modal data={selected} onClose={() => setSelected(null)} />
    </>
  );
}