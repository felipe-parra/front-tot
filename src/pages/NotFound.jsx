import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you look does not exist"
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  ></Result>
);
export default NotFound;
