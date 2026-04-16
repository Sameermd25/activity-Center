import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className="navbar">

      {/* LEFT: logo + title */}
      <div className="nav-brand">
        <div className="logo"></div>
        <div className="title">Activity Center</div>
      </div>

      {/* CENTER: nav links */}
      <div className="nav-links">
        <NavLink to="/">All</NavLink>
        <NavLink to="/nav">NAV Workflows</NavLink>
        <NavLink to="/other">Other Workflows</NavLink>
        <NavLink to="/capital">Capital Events</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/payments">Payments</NavLink>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <div className="date">01 Dec 2023 — 14 Apr 2026</div>
        <div className="avatar">MS</div>
      </div>

    </div>
  );
}