import Posts from '/imports/api/collections/posts.js';

Meteor.publish('postsFeed', (sort, page=1)=>{
  const pageSize = 10;
  let skip = ( page-1 ) * pageSize;
  
  let opts = {
    sort: sort
  };
  
  if(skip >0) {
    opts.skip = skip;  
  }
  
  return Posts.find({}, opts);
});

Meteor.publish('singlePost', (postId)=>{
  return Posts.find({ _id: postId });
});