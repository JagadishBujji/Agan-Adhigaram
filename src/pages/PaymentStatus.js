import { useState } from "react";

const PaymentStatus = () => {
  const [status, setStatus] = useState("pending");

  return (
    <>
      <h1>Payment Status - {status}</h1>
    </>
  );
};

export default PaymentStatus;
