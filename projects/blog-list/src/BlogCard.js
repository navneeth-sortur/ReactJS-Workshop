import React, { Component } from "react";

import classes from "./BlogCard.module.css";

class BlogCard extends Component {
  state = {
    likeCount: 0
  };
  item = this.props.item;

  dumpLogs = props => {
    console.log("🚀 ~ BlogCard ~ props:", props);
  };

  updateLikeCount = () => {
    this.setState((prevState, prevProps) => {
      return { likeCount: prevState.likeCount + 1 };
    });
  };

  render() {
    return (
      <div className={classes.BlogCard}>
        <h3> {this.item.title}</h3>
        <p> {this.item.description} </p>
        <p>
          Like Count :{" "}
          <span className={classes.LikeCount}> {this.item.likeCount}</span>
        </p>
        <button onClick={this.props.onLikeButtonClick}> 👍 </button>
      </div>
    );
  }
}

export default BlogCard;
