import styled from 'styled-components';
import logoPic from '../../statics/logo.png'; 

export const HeaderWrapper = styled.div`
	position: -webkit-sticky;
	position: sticky;
	top:0;
	height: 56px;
	border-bottom: 1px solid #F0F0F0;
	box-shadow: 0 2px 10px rgba(0,0,0,.05);
	background: #fff;
	overflow: hidden;
	z-index: 1;
	.scrollUp {
		transform: translateY(-56px);
	}
`;

export const HeaderWidthLimit = styled.div`
	width: 1440px;
	height: 115px;
	margin: 0 auto;
	transition: all 200ms ease-in;
`;

export const HeaderFirst = styled.div`
	width: 1440px;
	height: 56px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Logo = styled.div`
	width: 100px;
	margin-right: 140px;
	height: 56px;
	display: block;
	background: url(${logoPic}); //webpack打包问题
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	box-sizing: border-box;
`;

export const Addition = styled.div`
	width: 240px;
	height: 56px;
`;

export const NavItem = styled.div`
	line-height: 56px;
	text-align: center;
	color: #333;
	font-size: 17px;
	padding: 0 15px;
	&.left {
		cursor: pointer;
		margin-right:5px;
		float: left;
		.iconfont {
			line-height: 30px;
			width: 30px;
			font-size:17px;
		}
	}
	&.left:hover {
		background:#f5f5f5;
	}
	&.right {
		float: right;
		color: #969696;
		.iconfont {
			line-height: 30px;
			width: 30px;
			font-size:17px;
		}
	}
	&.right:hover {
		background:#f5f5f5;
	}
	&.index {
		color: #008080;
	}

`;

export const NavSearch = styled.input.attrs({
	placeholder: "搜索"
})`
	width: 178px;
	height: 38px;
	border: none;
	border-radius: 2px;
	margin-top: 9px;
	padding: 0 35px 0 20px;
	background: #eee;
	border-sizing: border-box;
	color: #777;
	&::placeholder {
		color: #999
	}
	&.focused {
		width: 250px;
	}
	//CSSTransition
	&.slide-enter {
		transition: all 350ms ease-out;
	}

	&.slide-exit {
		transition: all 350ms ease-out;
	}
`;

export const Button = styled.button`
	float: right;
	line-height: 38px;
	border-radius: 19px;
	margin-top: 9px;
	border: 1px solid #008B8B;
	margin-right: 20px;
	padding: 0 20px;
	font-size: 14px;
	cursor: pointer;
	&.reg {
		color: #008B8B;
		background: #fff;
	}
	&.reg:hover {
		background: #f5f5f5;
	}
	
	&.write {
		color: #fff;
		background: #008B8B;
	}
	&.write:hover {
		background: #008080;
	}
`;

//主要是为了定位“放大镜”图标
export const NavSearchWrapper = styled.div `
	float: left;
	margin-left: 30px;
	position: relative;
	.zoom {
		cursor: pointer;
		position: absolute;
		right: 5px;
		bottom: 5px;
		width:30px;
		line-height:30px;
		text-align: center;
		border-radius: 15px;
		&.focused {
			color: #FFF;
			background: #777;
		}
	}
`;

export const SearchInfo = styled.div`
	position: absolute; //脱标
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px 10px 20px;
	background: white;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
	width:100%;
	height: 20px;
	margin-top:20px;
	margin-bottom: 15px;
	color: #969696;
	.title {
		float: left;
		line-height: 20px;
		font-size: 17px;
	}
	.switch {
		float: right;
		display: block;
		line-height: 20px;
		font-size: 14px;
		cursor: pointer;
		&:hover {
			color: #333;
		}
		.spin {
			float: left;
			height: 13px;
			font-size: 13px;
			margin-right: 2px;
			transition: all 300ms ease-out;
			transform-origin: 40% 67%;
		}
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	float: left;
	margin-right: 10px;
	margin-bottom: 5px;
	line-height: 20px;
	padding: 0 5px;
	color: #787878;
	font-size: 12px;
	border: 1px solid #ddd;
	border-radius: 3px;
	cursor: pointer;
	transition: all 100ms ease-in;
	&:hover {
		color: #888;
		border: 1px solid #888;
	}
`;

export const HeaderSecond = styled.div`
	margin-left: 240px;
	width: 960px;
	height: 56px;
`;

export const ArticleTitle = styled.div`
	margin: 0 auto;
	width: 960px;
	.title {
		color: #404040;
		font-size: 24px;
		font-weight: 700;
		line-height: 56px;
	}
`;