export default function Paginacao({ totalPages, setCurrentPage, currentPage }) {
  return (
    <div className="mt-10 flex justify-center gap-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`py-2 px-4 rounded-lg border transition-colors ${
            currentPage === index + 1
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300 hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
