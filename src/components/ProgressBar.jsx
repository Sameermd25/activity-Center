// export function ProgressBar({ value }) {
//   let color = "fill-blue";
//   if (value > 80) color = "fill-green";
//   else if (value > 60) color = "fill-amber";

//   return (
//     <div className="prog-wrap">
//       <div className="prog-bar">
//         <div className={`prog-fill ${color}`} style={{ width: `${value}%` }} />
//       </div>
//       <span className="prog-pct">{value}%</span>
//     </div>
//   );
// }


export function ProgressBar({ status = [] }) {
  const total = status.length || 1;

  return (
    <div className="prog-wrap">
      <div className="prog-bar">
        {status.map((s, i) => {
          let cls = "blue";

          if (s.type === "done") cls = "green";
          else if (s.type === "warn") cls = "amber";
          else if (s.type === "gray") cls = "gray";

          return (
            <div
              key={i}
              className={`prog-seg ${cls}`}
              style={{ width: `${100 / total}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}