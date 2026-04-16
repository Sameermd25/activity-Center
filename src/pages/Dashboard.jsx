import { useState } from "react";
import data from "../data/data";
import { Panel } from "../components/Panel";
import { TableNAV } from "../components/TableNAV";
import { Modal } from "../components/Modal";
import { Pagination } from "../components/Pagination";
import { Tag } from "../components/Tag";
import { NavWorkflowsPanel } from "../panels/NavWorkflowsPanel";

export default function Dashboard() {
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    
    const filters = ["All", "EBBR", "Steerhead NL"];
    const itemsPerPage = 5;

    const [capitalPage, setCapitalPage] = useState(1);
    const capitalPerPage = 4;

    const [reportsPage, setReportsPage] = useState(1);
    const reportsPerPage = 3;
   

    const filteredData = data.navWorkflows
        .filter(r => filter === "All" || r.fund === filter)
        .filter(item =>
            `${item.fund} ${item.workflow} ${item.entity}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // console.log("filteredData:", filteredData.length);
    // console.log("totalPages:", totalPages);


    const reportsLast = reportsPage * reportsPerPage;
    const reportsFirst = reportsLast - reportsPerPage;

    const currentReports = data.reports.slice(reportsFirst, reportsLast);
    const reportsTotalPages = Math.ceil(data.reports.length / reportsPerPage);

    const capitalLast = capitalPage * capitalPerPage;
    const capitalFirst = capitalLast - capitalPerPage;

    const currentCapital = data.capitalEvents.slice(capitalFirst, capitalLast);
    const capitalTotalPages = Math.ceil(data.capitalEvents.length / capitalPerPage);

    return (
        <>
            {/* FILTER + SEARCH */}
            <div className="filterbar">
                <div className="filters">
                    {filters.map(f => (
                        <div
                            key={f}
                            className={`chip ${filter === f ? "active" : ""}`}
                            onClick={() => {
                                setFilter(f);
                                setCurrentPage(1);
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
                        setCurrentPage(1);
                    }}
                />
            </div>

            <div className="main">

                {/* NAV */}
                {/* <Panel title="NAV Overview" badge={filteredData.length} className="col-full">
                    <TableNAV rows={currentItems} onClick={setSelected} />

                    <div className="table-bottom">
                        <div className="showing-text">
                            Showing {indexOfFirst + 1}–
                            {Math.min(indexOfLast, filteredData.length)} of {filteredData.length}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </Panel> */}

                <NavWorkflowsPanel onRowClick={setSelected} />

                {/* OTHER WORKFLOWS */}
                <Panel title="Other Workflows" badge={data.otherWorkflows.length}>

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
                            {data.otherWorkflows.map((w, i) => (
                                <tr key={i}>
                                    <td>
                                        <strong>{w.fund}</strong><br />
                                        <span className="sub-text">{w.entity}</span>
                                    </td>

                                    <td>{w.name}</td>
                                    <td>{w.valueDate}</td>

                                    <td>
                                        {w.status.map((s, i) => (
                                            <span key={i} className="pill p-done">{s}</span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="table-bottom">
                        <div className="table-info">
                            1–{data.otherWorkflows.length} of {data.otherWorkflows.length}
                        </div>
                    </div>

                </Panel>

                {/* CAPITAL EVENTS */}
                <Panel title="Capital Events" badge={data.capitalEvents.length}>
                    <table>
                        <tbody>
                            {currentCapital.map(e => (
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
                        <div className="table-info">
                            Showing {capitalFirst + 1}–
                            {Math.min(capitalLast, data.capitalEvents.length)} of {data.capitalEvents.length}
                        </div>

                        <Pagination
                            currentPage={capitalPage}
                            totalPages={capitalTotalPages}
                            setCurrentPage={setCapitalPage}
                        />
                    </div>
                </Panel>

                {/* REPORTS */}
                <Panel title="Reports" badge={data.reports.length}>

                    <table>
                        <tbody>
                            {currentReports.map((r, i) => (
                                <tr key={i}>
                                    <td>{r.entity}</td>
                                    <td>{r.name}</td>
                                    <td>{r.group}</td>
                                    <td>{r.created}</td>
                                    <td><Tag type={r.status}>{r.status}</Tag></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="table-bottom">
                        <div className="table-info">
                            Showing {reportsFirst + 1}–
                            {Math.min(reportsLast, data.reports.length)} of {data.reports.length}
                        </div>

                        <Pagination
                            currentPage={reportsPage}
                            totalPages={reportsTotalPages}
                            setCurrentPage={setReportsPage}
                        />
                    </div>

                </Panel>

                {/* PAYMENTS */}
                <Panel title="Payments" badge={data.payments.length} className="col-full">
                    <table>
                        <tbody>
                            {data.payments.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.type}</td>
                                    <td>{p.date}</td>
                                    <td>{p.amount}</td>
                                    <td><Tag type={p.status}>{p.status}</Tag></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Panel>

            </div>

            <Modal data={selected} onClose={() => setSelected(null)} />
        </>
    );
}