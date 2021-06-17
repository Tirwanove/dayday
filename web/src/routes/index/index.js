import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Input,
  Avatar
} from 'antd';
const {Content, Sider, Header, Footer} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {connect} from 'dva';
import {hashHistory} from 'dva/router';
import style from './index.less';

import data from './data.json'

class Main extends React.Component {
  state = {
    theme: {
      bg: 'rgb(54, 94, 167)',
      bg_opacity: 'rgba(54, 94, 167, 0.8)',
      bg_img: require('../../assets/img/2.jpg')
    }
  }
  choose = (route) => {
    hashHistory.push(`/${route}`)
  }
  render() {
    let active = {
      backgroundColor: this.state.theme.bg_opacity,
      color: '#fff'
    }
    return (
      <Layout className={style.main}>
        <Sider className={style.side}>
          <Layout>
            <header
              className={style.header}
              style={{
              background: this.state.theme.bg
            }}>
              <Icon
                type="bars"
                style={{
                fontSize: 18,
                color: '#fff'
              }}/>
              <Input
                className={`${style.header_input}`}
                style={{
                fontSize: 18,
                color: '#fff',
                background: this.state.theme.bg
              }}></Input>
              <Icon
                type="search"
                style={{
                fontSize: 18,
                color: '#fff'
              }}/>
            </header>
            <Content className={style.content}>
              <section className={style.info}>
                <div className={style.user}>
                  <Avatar
                    style={{
                    backgroundColor: '#ffbf00'
                  }}>杨浩</Avatar>
                  <span
                    style={{
                    fontSize: 14,
                    color: '#555',
                    paddingLeft: '10px'
                  }}>杨浩</span>
                  <Icon
                    type="down"
                    style={{
                    color: '#888',
                    paddingLeft: '10px'
                  }}/>
                </div>
                <div className={style.icon}>
                  <Icon
                    type="bell"
                    style={{
                    fontSize: 16,
                    color: '#777'
                  }}/>
                  <Icon
                    type="message"
                    style={{
                    fontSize: 16,
                    color: '#777',
                    paddingLeft: '30px'
                  }}/>
                </div>
              </section>
              <ul className={style.siders}>
                <li>
                  <a style={this.props.location.pathname == '/list' ? active : null} onClick={this.choose.bind(this, 'list')}>
                    <Icon
                      type="mail"
                      style={{
                      paddingRight: 30,
                      fontSize: 14
                    }}/>打卡</a>
                </li>
                <li>
                  <a style={this.props.location.pathname == '/todo' ? active : null} onClick={this.choose.bind(this, 'todo')}>
                    <Icon
                      type="appstore"
                      style={{
                      paddingRight: 30,
                      fontSize: 14
                    }}/>清单</a>
                </li>
              </ul>
            </Content>
          </Layout>
        </Sider>
        <section
          style={{
          flex: 'auto',
          background: `url(${this.state.theme.bg_img}) no-repeat`,
          backgroundSize: 'cover'
        }}>
          <header
            className={style.content_header}
            style={{
            backgroundColor: this.state.theme.bg_opacity
          }}>
            <span style={{
              fontSize: 16
            }}>打卡列表</span>
            <ul className={style.operate}>
              <li>
                <a className={style.content_header_a} href="">共享</a>
              </li>
              <li>
                <a className={style.content_header_a} href="">切换主题</a>
              </li>
            </ul>
          </header>
          {this.props.children}
        </section>
      </Layout>
    );
  }
}

export default connect()(Main);