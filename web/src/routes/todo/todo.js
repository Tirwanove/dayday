import {
    Layout,
    Menu,
    Icon,
    Row,
    Col,
    Input,
    Button,
    Checkbox,
    Rate
} from 'antd';
const {Content, Sider, Header, Footer} = Layout;
import {connect} from 'dva';
import {hashHistory} from 'dva/router';
import style from './todo.less';

class List extends React.Component {
    state = {
        theme: {
            bg: 'rgb(54, 94, 167)',
            bg_opacity: 'rgba(54, 94, 167, 0.9)'
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
                            <Checkbox
                                style={{
                                fontSize: 14
                            }}>跑步</Checkbox>
                            <Button type="primary" shape="circle" size="small" icon="star"/>
                        </section>
                    </li>
                    <li>
                        <section className={style.item}>
                            <Checkbox
                                style={{
                                fontSize: 14
                            }}>跑步</Checkbox>
                            <Button type="dashed" shape="circle" size="small" icon="star"/>
                        </section>
                    </li>
                </ul>
            </section>
        );
    }
}

export default connect()(List);