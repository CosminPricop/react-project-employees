import ReactPaginate from "react-paginate";
import EmployeeRow from "./EmployeeRow";
import {useState} from 'react';
import './../App.css';



function Pagination(props) {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + props.itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = props.employees.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(props.employees.length / props.itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * props.itemsPerPage) % props.employees.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };  

   return (
    <div>
      <EmployeeRow employees={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </div>
  );
}

function PaginatedEmployees(props) {
  return (
    <div id="outer">
      <div id="container">
        <Pagination employees={props.employees} itemsPerPage={5} />
      </div>
    </div>
  );
}

export default PaginatedEmployees;