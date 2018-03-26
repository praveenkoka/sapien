import Meteor from 'meteor/meteor';
import faker from 'faker';
import Users from '/imports/api/collections/users';

const totalUsers = 10;

const generateFixtures = () => {
  let fakeUsers = [];
  let count = 0;
  
  let existingUsers = Users.find().count();
  let usersToCreate = totalUsers - existingUsers;
  
  while(usersToCreate > 0) {
    
    const u = {
      profile: {
        fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
        imgUrl: faker.image.avatar()
      }
    };
    
    Users.insert(u);
    
    usersToCreate--;
  }  
}

generateFixtures();


