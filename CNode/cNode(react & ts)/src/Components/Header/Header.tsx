import * as React from 'react';
import styles from './Header.css';

import { Input } from 'antd';
const Search = Input.Search;

class Header extends React.Component {
	constructor(props: Object) {
		super(props);
	}

	search(value: string) {
		const searchBaiduUrl: string = 'https://www.baidu.com/#ie=utf8&wd=%s';
		const url: string = searchBaiduUrl.replace('%s', value);
		window.open(url, '_blank');
	}

	render() {
		return (
			<header className={styles.wrapHeader}>
				<div className={styles.header}>
					<div className={styles.search}>
						<a href="/">
							<img className={styles.searchImg} src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo"/>
						</a>
						<Search
							className="search-input"
							placeholder="input search text"
							onSearch={this.search}
							style={{ width: 200, marginLeft: 30, }}
						/>
					</div>
					<div>
						<a href="/">首页</a>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;