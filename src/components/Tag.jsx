const mapStatus = (type) => {
  switch (type) {
    case "completed":
    case "delivered":
      return "done";

    case "initiated":
    case "review":
    case "pending":
      return "warn";

    case "client":
      return "blue";

    default:
      return "gray";
  }
};

// export function Tag({ type, children }) {
//   const mapped = mapStatus(type);

//   return (
//     <span className={`tag tag-${mapped}`}>
//       <span className="dot" />
//       {children}
//     </span>
//   );
// }




export function Tag({ type, children }) {
  let cls = "tag gray";

  if (type === "done") cls = "tag green";
  else if (type === "warn") cls = "tag amber";
  else if (type === "initiated") cls = "tag amber";
  else if (type === "review") cls = "tag blue";
  else if (type === "delivered") cls = "tag green";
  else if (type === "pending") cls = "tag gray";
  else if (type === "client") cls = "tag blue";
  else if (type === "processed") cls = "tag green";

  return (
    <span className={cls}>
      <span className="dot" />
      {children}
    </span>
  );
}