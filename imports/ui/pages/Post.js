import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '/imports/api/collections/posts.js'
import PostAvatar from '/imports/ui/components/PostAvatar.js';
import PostUpvotes from '/imports/ui/components/PostUpvotes.js';
import { Row, Col, Spin } from 'antd';

 
// Task component - represents a single todo item
class Post extends Component {
  
  
  render() {
    let content = <Spin size="large" />;
    
    console.log("Sub: ", this.props.sub.ready());
    if(this.props.sub.ready() == true){
      let post = this.props.post;
        content =  (
          <div>
            <Row>
              <h3> <PostAvatar user={post.author} createdAt={post.createdAt}/> </h3>
            </Row>
            <Row gutter={20}>
              <Col sm={24} lg={12} className="gutter-row" style={{ marginTop: 30 }}>
                <h2> 
                  {post.title}
                </h2>
                <PostUpvotes votes={post.votes}/>
              </Col>
            </Row>
            <Row gutter={0} type="flex">
              <Col sm={24} lg={12} className="gutter-row" style={{ marginTop: 30 }}>
                <img src={post.imgUrl} width="100%" />
              </Col>
            </Row>
            <Row gutter={20}>
              <Col sm={24} lg={12} className="gutter-row" style={{ marginTop: 30 }}>
                {post.description}
              </Col>
            </Row>
          </div>
        )
      
    }
    
    return content;
  }
}

export default withTracker(({match})=>{
  const sort = {
    votes: -1
  };
  const page = 1;
  
  return {
    sub: Meteor.subscribe('singlePost', match.params && match.params._id),
    post: Posts.findOne(match.params && match.params._id)
  };
})(Post);