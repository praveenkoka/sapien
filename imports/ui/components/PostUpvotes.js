import React, { Component } from 'react';
import { Icon } from 'antd';
import { prettyNumbers } from '/imports/modules/utils';

export default ({ votes }) => {
  return (
    <a href="#"><Icon type="caret-up" /> { prettyNumbers(votes, 1) } votes</a>
  )
}
  


