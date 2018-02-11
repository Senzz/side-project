/// <reference path="./../../../interface/interface.d.ts"/>
import * as React from 'react';
import './MainContentList.css';

// components
import ListItem from './ListItem/ListItem';
import Navigation from './Navigation/Navigation';

import fetchList from './../../../fetch/fetchList';

import { Pagination } from 'antd';

class MainContentList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      success: false,
      contentList: [],
      fetchParams: {
        tab: 'all',
        page: 1,
        mdrender: false,
        limit: 10
      },
    };
  }
  componentWillMount() {
    console.log(this.state)
    const { tab, page } = this.props.match.params;
    this.updateList(tab, page);
  }
  componentWillReceiveProps({match}: any) {
    console.log(this.state);
    const { tab, page } = match.params;
    this.updateList(tab, page);
  }
  updateList(tab?: string, page?: Number) {
    const that = this; 
    const fetchParams = this.state.fetchParams;
    if (tab) {
      fetchParams.tab = tab;
    }
    fetchParams.page = page ? page : 1;
    that.setState({fetchParams}, () => {
      fetchList(this.state.fetchParams).then(({data, success}) => {
        console.log(this.state.fetchParams);
        that.setState({
          contentList: data,
          success: success,
          fetchParams: fetchParams
        });
        console.log('finish', data);
      });
    });
    
  }

  showContentList() {
    if (this.state.contentList.length === 0) {
      return <div>暂无数据</div>;
    } else {
      return this.state.contentList.map((item: any, index: any) => (
        <ListItem key={item.id} data={item} />
      ));
    }
  }

  pageOnChange(pageNumber: Number) {
    const { tab } = this.state.fetchParams;
    this.props.history.replace(`/list/${tab}/${pageNumber}`)
  }

  render() {
    return (
      <div>
        <Navigation tab={this.props.match.params.tab} />
        <div className="contentList">
          {this.showContentList()}
        </div>
        <Pagination 
          className="pagination" 
          showQuickJumper={true} 
          current={Number(this.state.fetchParams.page)}
          total={1000}
          onChange={this.pageOnChange.bind(this)} 
        />
      </div>
    );
  }
}

export default MainContentList;