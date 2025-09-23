import React from "react";

type Props = {
  amount: number;
};

function ProductDashboard({ amount }: Props) {
  return <div>{`Total de chanques: ${amount}`}</div>;
}

export default ProductDashboard;
