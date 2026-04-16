export function TableNAV({ rows, onClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fund & Entity</th>
          <th>Workflow</th>
          <th>Value Date</th>
          <th>Progress</th>
          <th>Status Checkpoints</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((r) => (
          <tr
            key={r.id}
            onClick={() => {
              if (onClick) onClick(r);
            }}
            style={{ cursor: onClick ? "pointer" : "default" }}
          >
            {/* FUND */}
            <td>
              <strong>{r.fund}</strong>
              <br />
              <span className="sub">{r.entity}</span>
            </td>

            {/* WORKFLOW */}
            <td>{r.workflow}</td>

            {/* DATE */}
            <td>{r.valueDate}</td>

            {/* ✅ FIXED PROGRESS (SEGMENTED) */}
            <td>
              <div className="prog-bar">
                {r.status.map((s, i) => {
                  let cls = "blue";

                  if (s.type === "done") cls = "green";
                  else if (s.type === "warn") cls = "amber";
                  else if (s.type === "gray") cls = "gray";

                  return (
                    <div
                      key={i}
                      className={`prog-seg ${cls}`}
                      style={{ width: `${100 / r.status.length}%` }}
                    />
                  );
                })}
              </div>
              <span className="sub">{r.progress}%</span>
            </td>

            {/* ✅ FIXED CHECKPOINT TAGS */}
            <td>
              {r.status.map((s, i) => {
                let cls = "tag gray";

                if (s.type === "done") cls = "tag green";
                else if (s.type === "warn") cls = "tag amber";
                else if (s.type === "gray") cls = "tag gray";

                return (
                  <span key={i} className={cls}>
                    <span className="dot" />
                    {s.label}
                  </span>
                );
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}