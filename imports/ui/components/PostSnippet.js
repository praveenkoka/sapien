import React, { Component } from 'react';
import { Card, Avatar, Icon, Badge } from 'antd';
const { Meta } = Card;
import { prettyNumbers } from '/imports/modules/utils';
import PostAvatar from '/imports/ui/components/PostAvatar.js';
import PostUpvotes from '/imports/ui/components/PostUpvotes.js';

 
// Task component - represents a single todo item
export default class PostSnippet extends Component {
  
  render() {
    return (
      <Card 
        title={<PostAvatar user={this.props.data.author} createdAt={this.props.data.createdAt}/>}
        cover={<img alt={this.props.data.title} src={this.props.data.imgUrl} />}
        actions={[
          <PostUpvotes votes={this.props.data.votes}/>
        ]}
        >
        <Meta
          title={<a href={`/p/${this.props.data._id}`}>{this.props.data.title}</a>}
          description={this.props.data.description.trim(300) + "..."}
        />
      </Card>
    );
  }
}

