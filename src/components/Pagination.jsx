export function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>«</button>
      <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>‹</button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}>›</button>
      <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>»</button>
    </div>
  );
}