import React from "react";

const Feed = props => {
  const feed = props;
  console.log("props");
  return (
    <div className="article-preview">
      <div className="article-meta">
        {/* <a>
          <img src={article.author.image} />
        </a> */}

        <div className="info">
          <a className="author">{feed.restuarant}</a>
          <span className="date">
            {new Date(feed.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <span className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" /> {feed.content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
