import React from "react";
import NewsSection from "./NewsSection";

const AllNews = (props) => {
  return props.data.map((event) => (
    <NewsSection
      key={event.url}
      title={event.title}
      link={event.url}
      source={event.source}
      description={event.description}
      image={event.image}
      published_at={event.published_at}
      category={event.category}
    />
  ));
};

export default AllNews;
