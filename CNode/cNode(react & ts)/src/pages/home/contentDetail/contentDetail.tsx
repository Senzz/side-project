import * as React from 'react';
import * as moment from 'moment';
import fetchDetail from './../../../fetch/fetchDetail';
import './contentDetail.css';

class ContentDetail extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      success: false,
      data: {}
    }
    console.log(props);
  }
  componentWillMount() {
    fetchDetail(this.props.match.params.id)
      .then(({data, success}) => {
        this.setState({
          success: success,
          data: data, 
        })
        console.log('getDetail: ', data);
      });
  }
  render() {
    if(this.state.success) {
      let { title, create_at: createAt, author, content, visit_count: visitCount } = this.state.data;
      let createContent = () => { 
        return {__html: content}; 
      };
      return (
        <div className="content-detail">
          <div className="header">
            <div className="title">
              <span>{title}</span>
            </div>
            <div className="topics">
              • 发布于 • {moment(createAt).fromNow()} • 作者 {author.loginname} • {visitCount} 次浏览 
            </div>
          </div>
          <div className="main-content" dangerouslySetInnerHTML = {createContent()}></div>
        </div>
      );
    } else {
      return <div>获取数据失败</div>;
    };
  }
}

export default ContentDetail;