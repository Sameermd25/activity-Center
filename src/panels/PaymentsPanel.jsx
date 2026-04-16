import { useState } from "react";
import data from "../data/data";
import { Panel } from "../components/Panel";
import { Pagination } from "../components/Pagination";
import { Tag } from "../components/Tag";

export function PaymentsPanel() {
  const [page, setPage] = useState(1);
  const perPage = 3;

  const last = page * perPage;
  const first = last - perPage;

  const current = data.payments.slice(first, last);
  const totalPages = Math.ceil(data.payments.length / perPage);

  return (
    <Panel title="Payments" badge={data.payments.length} className="col-full">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Value Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {current.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.type}</td>
              <td>{p.date}</td>
              <td>{p.amount}</td>
              <td>
                <Tag type={p.status}>{p.status}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-bottom">
        <div className="table-info">
          Showing {first + 1}–{Math.min(last, data.payments.length)} of {data.payments.length}
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