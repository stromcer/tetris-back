import { useEffect, useState } from "react";

const HttpCall = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/http-call", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      }).catch((e) => {console.log(e)})
  });
  return (
    <>
      <h2>HTTP Communication</h2>
      <h3 className="http">{data}</h3>
    </>
  );
}

export default HttpCall;