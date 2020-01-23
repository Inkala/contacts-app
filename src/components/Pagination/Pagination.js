import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Pagination.module.scss';

const Pagination = ({
  contactsPerPage,
  totalContacts,
  paginationHandler,
  currentPage
}) => {
  const pagesAmount = Math.ceil(totalContacts / contactsPerPage);
  return (
    <section className={classes.listPagination}>
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
    </section>
  );
};

// Pagination.propTypes = {
//   cardsPerPage: PropTypes.number,
//   totalContacts: PropTypes.number,
//   currentPage: PropTypes.number,
//   paginationHandler: PropTypes.func,
// };

export default Pagination;
