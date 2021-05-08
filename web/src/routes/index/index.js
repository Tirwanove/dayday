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
  render() {
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
                type="menu-fold"
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
                  }}>张三</Avatar>
                  <span
                    style={{
                    fontSize: 14,
                    color: '#555',
                    paddingLeft: '10px'
                  }}>杨浩</span><Icon
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
              <Menu selectedKeys={[this.state.current]} mode="vertical">
                <Menu.Item key="mail">
                  <Icon type="mail"/>打卡
                </Menu.Item>
                <Menu.Item key="app">
                  <Icon type="appstore"/>清单
                </Menu.Item>
              </Menu>
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
            <ul>
              <li>
                <a className={style.content_header_a} href="">共享</a>
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