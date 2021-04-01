import React from "react";
import AllNews from "../news/AllNews";
import useSWR from "swr";

const NewsPage = () => {
  const { data, error } = useSWR(process.env.REACT_APP_NEWS_API);

  if (!data && !error) return <h1>Loading...</h1>;

  if (error) return <h1>An Error has Occureed...!!!</h1>;

  console.log(data.data);
  return (
    <div>
      <AllNews data={data.articles} />
    </div>
  );
};

export default NewsPage;
