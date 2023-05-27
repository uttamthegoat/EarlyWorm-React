import React, { useState, useEffect } from "react";

export default function Row(props) {
  const [news, setNews] = useState({ articles: [], loading: false });

  useEffect(() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fe4249d9d26a427da447800fe502f7c0&pageSize=${props.pageSize}`;
    setNews({loading:true})
    let mounted = true;
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items.articles);
        if (mounted) {
          setNews({ articles: items.articles, loading: false });
        }
        console.log(news.articles);
      });
    return () => (mounted = false);
  }, []);

  return (
    <div className="row__posters">
      {/* {news.articles.map(element=>{
    return <div className="row__posters_block">
        {element.title?element.title:"title"}
    </div>})} */}
    </div>
  );
}
