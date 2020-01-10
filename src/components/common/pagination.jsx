import React, { Component } from "react";
import "./pagination.css";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
