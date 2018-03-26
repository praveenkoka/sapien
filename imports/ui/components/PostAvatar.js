import React, { Component } from 'react';
import { Card, Avatar, Icon, Badge } from 'antd';
import moment from 'moment';

export default ({ user, createdAt }) => {
  return (
    <div>
      <Avatar src={user.profile.imgUrl} />
      &nbsp;
       {user.profile.fullName } &bull; { moment(createdAt).fromNow() }
    </div>
  )
}
  