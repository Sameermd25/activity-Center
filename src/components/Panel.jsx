// export function Panel({ title, badge, children, className = "" }) {
//   return (
//     <div className={`panel ${className}`}>
//       <div className="panel-head">
//         <div>
//           {title} <span className="badge">{badge}</span>
//         </div>
//       </div>

//       {children}
//     </div>
//   );
// }

export function Panel({ title, badge, children, className = "", actions }) {
  return (
    <div className={`panel ${className}`}>
      <div className="panel-head">
        
        {/* LEFT */}
        <div>
          {title} <span className="badge">{badge}</span>
        </div>

        {/* RIGHT (NEW) */}
        <div className="panel-actions">
          {actions}
        </div>

      </div>

      {children}
    </div>
  );
}