import { useState } from "react";
import data from "../data/data";
import { Panel } from "../components/Panel";
import { Pagination } from "../components/Pagination";
import { Tag } from "../components/Tag";

export default function OtherWorkflowsPanel() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const total = data.otherWorkflows.length;
  const last = page * itemsPerPage;
  const first = last - itemsPerPage;

  const currentItems = data.otherWorkflows.slice(first, last);
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <Panel title="Other Workflows" badge={total}>
      <table>
        <thead>
          <tr>
            <th>Fund</th>
            <th>Name</th>
            <th>Value date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((r, i) => (
            <tr key={i}>
              <td>
                <strong>{r.entity}</strong>
                <br />
                <span style={{ fontSize: "12px", color: "#6B7280" }}>
                  Innovation Fund
                </span>
              </td>

              <td>{r.name}</td>
              <td>{r.created}</td>

              <td>
                <Tag type={r.status}>{r.status}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="table-bottom">
        <div className="table-info">
          Showing {first + 1}–{Math.min(last, total)} of {total}
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          setCurrentPage={setPage}
        />
      </div>
    </Panel>
  );
}