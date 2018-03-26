import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Users = new Mongo.Collection('users');


// Security rules
Users.allow({
  insert: () => false, //Disallowed all client CRUD operations for this test
  update: () => false,
  remove: () => false,
});

// Schema
// Users.schema = new SimpleSchema({
//   createdAt: {
//     type: Date
//   },
//   profile: {
//     type: Object,
//   },
//   'profile.fullName': {
//     type: String
//   },
//   'profile.imgUrl': {
//     type: SimpleSchema.RegEx.Url
//   }
// });
// 
// Users.attachSchema(Users.schema);

export default Users;