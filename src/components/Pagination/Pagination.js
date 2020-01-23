import React from 'react';
import PropTypes from 'prop-types';

import classes from './Pagination.module.scss';

const Pagination = ({
  elementsPerPage,
  totalElements,
  paginationHandler,
  currentPage,
  type
}) => {
  const pagesAmount = Math.ceil(totalElements / elementsPerPage);
  return (
    <section
      className={
        type === 'contacts'
          ? classes.contactsPagination
          : classes.connectionsPagination
      }
    >
      {pagesAmount ? (
        <React.Fragment>
          <button
            disabled={currentPage === 1}
            onClick={() => paginationHandler(-1)}
          >
            &lt;
          </button>
          <span>{`${currentPage}/${pagesAmount}`}</span>
          <button
            disabled={currentPage === pagesAmount}
            onClick={() => paginationHandler(1)}
          >
            &gt;
          </button>
        </React.Fragment>
      ) : null}
    </section>
  );
};

Pagination.propTypes = {
  elementsPerPage: PropTypes.number,
  totalElements: PropTypes.number,
  paginationHandler: PropTypes.func,
  currentPage: PropTypes.number,
  type: PropTypes.string
};

export default Pagination;
