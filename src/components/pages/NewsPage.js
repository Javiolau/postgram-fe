import React from "react";
import AllNews from "../news/AllNews";
import useSWR from "swr";
import Loading from "../utils/Loading";

const NewsPage = () => {
  const { data, error } = useSWR(process.env.REACT_APP_NEWS_API);

  if (!data && !error) return <Loading />;

  if (error)
    return (
      <div>
        <h1>An Error has Occureed...!!!</h1> <Loading />
      </div>
    );

  return (
    <div>
      <AllNews data={data.articles} />
    </div>
  );
};

export default NewsPage;
