import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { getProductsBySearchAndPagination } from '../actions/products';
import useStyles from './styles';

const Paginate = ({ page, search, month }) => {
  const { numberOfPages } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    if (page || search || month) {
      dispatch(getProductsBySearchAndPagination(month, search, page ));
      history.push(`/products/search/${month}?searchQuery=${search}&page=${page}`);
    }
  }, [dispatch, page, search, month]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/products/search/${month}?searchQuery=${search}&page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;
