import React from "react";
import NewsSection from "./NewsSection";

const AllNews = (props) => {
  if (!props) return <h1>Loading...</h1>;
  console.log(props.data);
  if (!props.data) return <NewsSection />;
  return props.data.map((event) => (
    <NewsSection
      key={event.url}
      title={event.title}
      link={event.url}
      source={event.source.name}
      description={event.description}
      image={event.urlToImage}
      published_at={event.publishedAt}
    />
  ));
};

export default AllNews;
