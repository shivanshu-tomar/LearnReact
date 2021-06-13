import React, { useEffect, useState } from "react";
import apiHelper from "../apis/apiHepler";
import DashboardComponent from "../components/DashboardComponent";
function DashboardContainer() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    apiHelper("get", "https://jsonplaceholder.typicode.com/posts", {}).then(
      (res) => {
        setPosts(res.data);
      }
    );
  }, []);
  return (
    <div>
      <DashboardComponent posts={posts} />
    </div>
  );
}

export default DashboardContainer;
