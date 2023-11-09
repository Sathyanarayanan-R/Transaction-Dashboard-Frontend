import React from "react";
import { CircularProgress } from "@material-ui/core";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import Tables from "../Table/Tables";

const Products = ({ setCurrentId }) => {
  const { products, isLoading } = useSelector((state) => state.products);
  const classes = useStyles();

  if (!products?.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
      <div className="container-fluid">
        <Row>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Sold</th>
                    <th>Image</th>
                  </tr>
                </thead>
                {products?.map((product) => {
                  return (
                    <Tables product={product} setCurrentId={setCurrentId} />
                  );
                })}
              </Table>
            </Card>
          </div>
        </Row>
      </div>
  );
};

export default Products;
