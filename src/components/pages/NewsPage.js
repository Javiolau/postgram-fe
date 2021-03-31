import React from "react";
import AllNews from "../news/AllNews";
import useSWR from "swr";

const NewsPage = () => {
  const { data, error } = useSWR(
    "http://api.mediastack.com/v1/news?access_key=506772e12cb1aa71aae551503c7fd403&categories=science,technology&country=us&languages=en"
  );

  if (!data && !error) return <h1>Loading...</h1>;

  if (error) return <h1>An Error has Occureed...!!!</h1>;

  console.log(data.data);
  //  if (data && !error)
  return (
    <div>
      <AllNews data={data.data} />
    </div>
  );
};

export default NewsPage;
