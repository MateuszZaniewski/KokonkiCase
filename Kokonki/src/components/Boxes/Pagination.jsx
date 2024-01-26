import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Opinion from "./Opinion";

export default function Pagination({ opinions }) {
  console.log(opinions.length);
  const items = [...Array(opinions.length).keys()];

  function Items({ currentItems, opinions }) {
    console.log(opinions);
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item) =>
            opinions.map((opinion, index) => {
              console.log(index, item);
              if (index === item) {
                return (
                  <div key={index}>
                    <Opinion value={opinion} />
                  </div>
                );
              }
            })
          )}
      </div>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} opinions={opinions} />
        <ReactPaginate
          className="flex justify-center items-center gap-5 xl:py-14"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return <PaginatedItems itemsPerPage={4} />;
}
