import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiHelper from "../apis/apiHepler";
import apiHepler from "../apis/apiHepler";
function Post() {
  const [postDetail, setpostDetail] = useState({});
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    apiHelper(
      "get",
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {}
    ).then((res) => {
      console.log(res);
      setpostDetail(res.data);
    });
  }, []);

  return <div>{postDetail.body}</div>;
}

export default Post;
