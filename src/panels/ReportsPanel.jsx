import { useState } from "react";
import data from "../data/data";
import { Panel } from "../components/Panel";
import { Pagination } from "../components/Pagination";
import { Tag } from "../components/Tag";

export function ReportsPanel() {
  const [page, setPage] = useState(1);
  const perPage = 2;

  const last = page * perPage;
  const first = last - perPage;

  const current = data.reports.slice(first, last);
  const totalPages = Math.ceil(data.reports.length / perPage);

  return (
    <Panel title="Reports" badge={data.reports.length}>
      <table>
        <thead>
          <tr>
            <th>Entity</th>
            <th>Report</th>
            <th>Group</th>
            <th>Created</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {current.map((r, i) => (
            <tr key={i}>
              <td>{r.entity}</td>
              <td>{r.name}</td>
              <td>{r.group}</td>
              <td>{r.created}</td>
              <td>
                <Tag type={r.status}>{r.status}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-bottom">
        <div className="table-info">
          Showing {first + 1}–{Math.min(last, data.reports.length)} of {data.reports.length}
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