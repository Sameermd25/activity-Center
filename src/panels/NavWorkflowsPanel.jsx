import { useState } from "react";
import data from "../data/data";
import { Panel } from "../components/Panel";
import { TableNAV } from "../components/TableNAV";
import { Pagination } from "../components/Pagination";

export function NavWorkflowsPanel({ onRowClick }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filters = ["All", "EBBR", "Steerhead NL"];
  const perPage = 5;

  // ✅ FILTER + SEARCH COMBINED
  const filtered = data.navWorkflows
    .filter(r => filter === "All" || r.fund === filter)
    .filter(item =>
      `${item.fund} ${item.workflow} ${item.entity}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const last = page * perPage;
  const first = last - perPage;

  const current = filtered.slice(first, last);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <>
      {/* 🔝 FILTER + SEARCH */}
      <div className="filterbar">
        <div className="filters">
          {filters.map(f => (
            <div
              key={f}
              className={`chip ${filter === f ? "active" : ""}`}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
            >
              {f}
            </div>
          ))}
        </div>

        <input
          className="search-input"
          placeholder="Search workflows..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* 🔽 PANEL */}
      <Panel title="NAV Overview" badge={filtered.length} className="col-full" actions={
    <>
      <button className="btn secondary">Export</button>
      <button className="btn primary">+ New workflow</button>
    </>
  }>
        <TableNAV rows={current} onClick={onRowClick} />

        <div className="table-bottom">
          <div className="table-info">
            Showing {first + 1}–{Math.min(last, filtered.length)} of {filtered.length}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setCurrentPage={setPage}
          />
        </div>
      </Panel>
    </>
  );
}