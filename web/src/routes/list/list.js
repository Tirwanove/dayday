import {
    Layout,
    Menu,
    Icon,
    Row,
    Col,
    Input,
    Button,
    Badge
} from 'antd';
const {Content, Sider, Header, Footer} = Layout;
import {connect} from 'dva';
import {hashHistory} from 'dva/router';
import style from './list.less';

class List extends React.Component {
    state = {
        theme: {
            bg: 'rgb(54, 94, 167)',
            bg_opacity: 'rgba(54, 94, 167, 0.9)',
            count: '#ff4455'
        }
    }
    render() {
        return (
            <section className={style.add_item}>
                <div
                    className={style.add_form}
                    style={{
                    backgroundColor: this.state.theme.bg_opacity
                }}>
                    <Icon
                        type="plus"
                        style={{
                        fontSize: 18,
                        color: '#fff'
                    }}/>
                    <Input
                        className={style.add_input}
                        placeholder="添加任务..."
                        style={{
                        fontSize: 14,
                        background: this.state.theme.bg_opacity
                    }}></Input>
                    <Row gutter={10}>
                        <Col xs={6}>
                            <Button type="primary" shape="circle" icon="calendar"/>
                        </Col>
                        <Col xs={6}>
                            <Button type="primary" shape="circle" icon="ellipsis"/>
                        </Col>
                        <Col xs={6}>
                            <Button type="primary" shape="circle" icon="check"/>
                        </Col>
                        <Col xs={6}>
                            <Button type="primary" shape="circle" icon="close"/>
                        </Col>
                    </Row>
                </div>
                <ul className={style.items}>
                    <li>
                        <section className={style.item}>
                            <p>
                                <span className={style.count} style={{background: this.state.theme.count}}>已打卡<i>200</i>次</span>
                                <span className={style.title}>跑步</span>
                            </p>
                            <div>
                                <Button type="primary" shape="circle" size="small" icon="check"/>
                                <Button type="primary" shape="circle" size="small" icon="check"/>
                                <Button type="dashed" shape="circle" size="small" icon="check"/>
                                <Button type="dashed" shape="circle" size="small" icon="check" disabled/>
                            </div>
                        </section>
                    </li>
                    <li>
                        <section className={style.item}>
                            <p>
                                <span>0</span>
                                <span>跑步</span>
                            </p>
                            <Button type="primary" shape="circle" size="small" icon="check"/>
                        </section>
                    </li>
                </ul>
            </section>
        );
    }
}

export default connect()(List);