"use client";

export default function PaginationSection({
    currentPage = 1,
    totalPages = 10,
    onPageChange,
}) {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation">
                <ul className="pagination">

                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                    </li>

                    {pages.map((page) => (
                        <li
                            key={page}
                            className={`page-item ${
                                currentPage === page ? "active" : ""
                            }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    <li
                        className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                        }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>

                </ul>
            </nav>
        </div>
    );
}