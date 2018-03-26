import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '/imports/api/collections/posts.js'
import PostSnippet from '/imports/ui/components/PostSnippet.js'
import { Row, Col } from 'antd';

 
// Task component - represents a single todo item
class PostsFeed extends Component {
  renderPosts(type) {
    let posts = this.props.posts;
    if(type === 'even') {
        posts = _.filter(posts, (p, index)=>{
          return index % 2 ==0;
        });
    }
    else {
      posts = _.filter(posts, (p, index)=>{
        return index % 2 !=0;
      });
    }
    
    return posts.map((p)=>{
      return <PostSnippet data={p} key={p._id}/>
    });
  }
  
  render() {
    return (
      <div>
        <Row>
          <h1> Posts </h1>
        </Row>
        <Row gutter={20}>
          <Col sm={24} lg={12} className="gutter-row">
            {this.renderPosts('even')}
          </Col>
          <Col sm={24} lg={12} className="gutter-row">
            {this.renderPosts('odd')}
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTracker(()=>{
  const sort = {
    votes: -1
  };
  const page = 1;
  Meteor.subscribe('postsFeed', sort, page);
  
  return {
    posts: Posts.find({ }, { sort: sort }).fetch()
  };
})(PostsFeed);