import React from "react";
import AllNews from "../news/AllNews";
import useSWR from "swr";
//import xmlToJSON from "xml-js";
//https://www.npmjs.com/package/xml-js
const NewsPage = () => {


  // "https://news.google.com/rss/search?q=apple&hl=en-US&gl=US&ceid=US:en"
  const { data, error } = useSWR(process.env.REACT_APP_NEWS_API);

  //console.log(data);
  //console.log(xmlToJSON.xml2js(xml), { compact: true, spaces: 4 });

  if (!data && !error) return <h1>Loading...</h1>;

  if (error) return <h1>An Error has Occureed...!!!</h1>;

  console.log(data.data);
  return (
    <div>
      {" "}
      <AllNews data={data.articles} />
    </div>
  );
};

export default NewsPage;
