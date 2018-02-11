import * as React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom'; 

class Navigation extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="navigation">
        <NavLink 
          className={!this.props.tab ? 'selected' : ''}
          to="/list/all"
          activeClassName="selected"
        >全部
        </NavLink>

        <NavLink 
          to="/list/good"
          activeClassName="selected"
        >精华
        </NavLink>

        <NavLink 
          to="/list/share"
          activeClassName="selected"
        >分享
        </NavLink>

        <NavLink 
          to="/list/ask"
          activeClassName="selected"
        >问答
        </NavLink>
        
        <NavLink 
          to="/list/job"
          activeClassName="selected"
        >招聘
        </NavLink>

        <NavLink 
          to="/list/dev"
          activeClassName="selected"
        >客户端测试
        </NavLink>
      </div>
    );
  }
}

export default Navigation;