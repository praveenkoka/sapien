import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Users from './users';

const Posts = new Mongo.Collection('posts');


// Security rules
Posts.allow({
  insert: () => false, //Disallowed all client CRUD operations for this test
  update: () => false,
  remove: () => false,
});

// Schema
// Posts.schema = new SimpleSchema({
//   createdAt: {
//     type: Date
//   },
//   title: {
//     type: String,
//   },
//   description: {
//     type: String
//   },
//   imgUrl: {
//     type: String
//   },
//   author: {
//     type: Users
//   },
//   votes: {
//     type: Number
//   }
// });


// Posts.attachSchema(Posts.schema);



export default Posts;