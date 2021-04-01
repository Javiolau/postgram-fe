import React from "react";
import NewsSection from "./NewsSection";

const AllNews = (props) => {
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
