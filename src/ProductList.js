import React from "react";
import { productList } from "./ProductListJson";
import Rating from "./Rating";
import Pagination from "./Pagination";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDataList: []
    };
  }

  onChangePage = pageOfItems => {
    this.setState({
      productDataList: pageOfItems
    });
  };

  render() {
    const { productDataList } = this.state;

    return (
      <div>
        <table>
          <tr>
            <th>Product Title</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
          {productDataList.map((item, index) => {
            return (
              <tr key={index} className="pro-list-info">
                <td>{item.productTitle}</td>
                <td>${item.salePrice}</td>
                <td>
                  <Rating ratingStars={item.rating} />
                </td>
              </tr>
            );
          })}
        </table>

        <Pagination
          pageSize={8}
          items={productList}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default ProductList;
