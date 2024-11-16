type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    totalPage: number;
};

function Pagination({ page, setPage, totalPage }: PaginationProps) {
    return (
        <div className="mt-8 flex justify-center space-x-2">
            <button
                className="btn btn-outline btn-md bg-primaryColor text-white hover:bg-primaryColorHover hover:text-white"
                onClick={() => setPage(page - 1)} >Prev</button>
            <button className="btn btn-outline btn-md bg-white text-black">{page}</button>
            <button
                className="btn btn-outline btn-md bg-primaryColor text-white hover:bg-primaryColorHover hover:text-white"
                onClick={() => setPage(page + 1)} disabled={page === totalPage}>Next  </button>
        </div>
    );
}

export { Pagination };