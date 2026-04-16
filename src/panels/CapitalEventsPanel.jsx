import { useState } from "react";
import data from "../data/data";
import { Panel } from "../components/Panel";
import { Pagination } from "../components/Pagination";
import { Tag } from "../components/Tag";

export function CapitalEventsPanel() {
  const [page, setPage] = useState(1);
  const perPage = 4;

  const last = page * perPage;
  const first = last - perPage;

  const current = data.capitalEvents.slice(first, last);
  const totalPages = Math.ceil(data.capitalEvents.length / perPage);

  return (
    <Panel title="Capital Events" badge={data.capitalEvents.length}>
      <table>
        <tbody>
          {current.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.fund}</td>
              <td>{e.type}</td>
              <td>{e.date}</td>
              <td><Tag type={e.status}>{e.status}</Tag></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-bottom">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          setCurrentPage={setPage}
        />
      </div>
    </Panel>
  );
}