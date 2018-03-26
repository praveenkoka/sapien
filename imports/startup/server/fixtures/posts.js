import Meteor from 'meteor/meteor';
import faker from 'faker';
import Users from '/imports/api/collections/users';
import Posts from '/imports/api/collections/posts';

const postsPerUser = 2;

const generateFixtures = () => {
  let users = Users.find().fetch();
  
  users.forEach((u)=>{
    let existingPosts = Posts.find({ 'author._id': u._id }).count(); 
  
    while(existingPosts < postsPerUser) {
      Posts.insert(factoryPost(u));  
      existingPosts++;
    }
    
  });  
}

const getImgUrl = () => {
  let fileNames = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg" ];
  
  return "/postImages/" + _.sample(fileNames);
}

const factoryPost = (user)=> {
  return post = {
    createdAt: new Date(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    imgUrl:  getImgUrl(), //faker.random.image() faker images not loading, so added local ones
    author: user,
    votes: faker.random.number()
  };
}

generateFixtures();


