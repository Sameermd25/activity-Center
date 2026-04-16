export function Pill({ label, type }) {
  const map = {
    done: "p-done",
    warn: "p-warn",
    gray: "p-gray",
    blue: "p-blue"
  };
  return (
    <span className={`pill ${map[type]}`}>
      <span className="pill-dot" /> {label}
    </span>
  );
}