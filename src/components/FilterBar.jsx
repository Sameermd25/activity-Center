export function FilterBar({ filters, active, setActive }) {
    return (
        <div className="filters">
            {filters.map(f => (
                <button
                    key={f}
                    className={active === f ? "active" : ""}
                    onClick={() => setActive(f)}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}