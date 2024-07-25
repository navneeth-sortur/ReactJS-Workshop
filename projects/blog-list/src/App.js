import BlogCard from "./BlogCard";
import React, { Component } from "react";

class App extends Component {
  state = {
    showBlogList: true,
    blogArr: [
      {
        id: 1,
        title: "Blog Title 1",
        likeCount: 0,
        description:
          "lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar"
      },
      {
        id: 2,
        title: "Blog Title 2",
        likeCount: 0,
        description:
          "lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar"
      },
      {
        id: 3,
        title: "Blog Title 3",
        likeCount: 0,
        description:
          "lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar"
      }
    ]
  };

  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogList: !prevState.showBlogList };
    });
  };

  onLikeButtonClick = pos => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];
    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;
    this.setState({ blogArr: updatedBlogList });
  };

  render() {
    const blogCards = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          item={item}
          likeCount={item.likeCount}
          onLikeButtonClick={() => this.onLikeButtonClick(pos)}
        ></BlogCard>
      );
    });

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>
          {" "}
          {this.state.showBlogList ? "Hide List" : "Show List"}{" "}
        </button>
        <br></br>
        {this.state.showBlogList ? blogCards : null}
      </div>
    );
  }
}

export default App;
