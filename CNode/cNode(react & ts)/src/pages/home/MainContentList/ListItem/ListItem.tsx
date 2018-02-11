/// <reference path="./../../../../interface/interface.d.ts"/>

import * as React from 'react';
import * as moment from 'moment';
import './ListItem.css';
import { IListItem } from 'iListItem';
import { NavLink } from 'react-router-dom';
const bookIcon = require('./../../../../static/svg/book.svg');
const discussIcon = require('./../../../../static/svg/discuss.svg');

interface ItemData {
  data: IListItem;
}

class ListItem extends React.Component<ItemData, any> {
  constructor(props: any) {
    super(props);
  }
  switchTab(data: IListItem) {
    if (data.top) {
      return '置顶';
    }
    if (data.good) {
      return '精华';
    }
    
    switch (data.tab) {
      case 'share':
        return '分享';
      case 'ask':
        return '问答';
      case 'job':
        return '招聘';
      default:
        return '客户端测试';
    }
  }

  render() {
    const { id, author, title, reply_count: replyCount, visit_count: visitCount, last_reply_at: lastReplyAt } = this.props.data;
    
    const tab: string = this.switchTab(this.props.data);
    return (
      <div className="list-item list-item-wrap">
        <div className="list-item-inner">
          <div className="title">
            <span>
              <NavLink to={'/content_detail/' + id}>{title}</NavLink>
            </span>
          </div>
          <div className="detail">
            <span className="tab">{tab}</span>
            <div className="author">
              <img className="avatar_url" src={author.avatar_url} alt="头像" />
              <span>{author.loginname}</span>
            </div>
            <div className="visit-count">
              <img src={bookIcon} className="book-icon" alt="book-icon" />
              <span>{visitCount}</span>
            </div>
            <div className="discuss">
              <img src={discussIcon} className="book-icon" alt="book-icon" />
              <span>{replyCount}</span>
            </div>
            <div className="">
              { moment(lastReplyAt).fromNow() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;