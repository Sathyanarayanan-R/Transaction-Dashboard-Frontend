import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getProductsBySearchAndPagination } from "../../actions/products";
import Products from "../Products/Products";
import Pagination from "../Pagination";
import useStyles from "./styles";
import axios from "axios";

import StatisticsPieChart from "../Charts/StatisticsPieChart";
import TransactionsBarChart from "../Charts/TransactionsBarChart";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("march");

  const [sales, setSales] = useState();
  const [priceRange, setPriceRange] = useState();

  const history = useHistory();

  useEffect(async () => {
    history.push(`/products/search/${month}?searchQuery=""&page=1`);

    const {
      data: { All3APIData },
    } = await axios.get(
      `https://transaction-dashboard-backend-sj.onrender.com/products/getallapidata/${month}`
    );

    setSales(All3APIData[1]);
    setPriceRange(All3APIData[2].monthlyPriceRanges);
  }, []);

  const searchPost = () => {
    if (search.trim() || page) {
      dispatch(getProductsBySearchAndPagination(month, search, 1));
      history.push(`/products/search/${month}?searchQuery=${search}&page=1`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleChange = async (e) => {
    if (search.trim() || page) {
      dispatch(getProductsBySearchAndPagination(e.target.value, "", 1));
      history.push(`/products/search/${e.target.value}?searchQuery=""&page=1`);
      setMonth(e.target.value);
    } else {
      history.push('/');
    }

    const {
      data: { All3APIData },
    } = await axios.get(
      `https://transaction-dashboard-backend-sj.onrender.com/products/getallapidata/${e.target.value}`
    );

    setSales(All3APIData[1]);
    setPriceRange(All3APIData[2].monthlyPriceRanges);
  };

  return (
    <>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={1}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={12}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  onKeyDown={handleKeyPress}
                  name="search"
                  variant="outlined"
                  label="Search Title/Description/Price"
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
                <h6>
                  <b>Please choose any Month below</b>
                </h6>
                <select onChange={handleChange} value={month}>
                  {[
                    "All",
                    "january",
                    "february",
                    "march",
                    "april",
                    "may",
                    "june",
                    "july",
                    "august",
                    "september",
                    "october",
                    "november",
                    "december",
                  ].map((month) => {
                    return (
                      <option value={month} key={month}>
                        {month[0].toUpperCase() + month.slice(1, month.length)}
                      </option>
                    );
                  })}
                </select>
              </AppBar>
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} month={month} search={search} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Products />
            </Grid>
            {month !== "All" &&
              <Container maxWidth="xl" style={{ marginTop: "10px" }}>
                <Grid
                  container
                  justify="space-between"
                  alignItems="stretch"
                  spacing={1}
                  className={classes.gridContainer}
                >
                  <Grid item xs={12} sm={6} md={5}>
                    <AppBar
                      className={classes.appBarSearch}
                      position="static"
                      color="inherit"
                    >
                      <StatisticsPieChart
                        sales={sales}
                        month={
                          month[0].toUpperCase() + month.slice(1, month.length)
                        }
                      />
                    </AppBar>
                  </Grid>

                  <Grid item xs={12} sm={6} md={7}>
                    <AppBar
                      className={classes.appBarSearch}
                      position="static"
                      color="inherit"
                    >
                      <TransactionsBarChart
                        priceRange={priceRange}
                        month={
                          month[0].toUpperCase() + month.slice(1, month.length)
                        }
                      />
                    </AppBar>
                  </Grid>
                </Grid>
              </Container>}
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
