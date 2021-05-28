import {
    Layout,
    Menu,
    Icon,
    Row,
    Col,
    Input,
    Button,
    Popover,
    Badge,
    InputNumber,
    message
} from 'antd';
const {Content, Sider, Header, Footer} = Layout;
const ButtonGroup = Button.Group;
const {TextArea} = Input;
import {connect} from 'dva';
import {hashHistory} from 'dva/router';
import style from './list.less';

import data from './list.json'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: {
                bg: 'rgb(54, 94, 167)',
                bg_opacity: 'rgba(54, 94, 167, 0.9)',
                count: '#ff4455'
            },
            name: '',
            times: 1,
            days: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周末'
            ],

            visible: false,
            days_visible: false,

            cards: [],

            data: data,

            detail: {
                name: '每天一杯水'
            }
        }
    }
    changeName = (event) => {
        this.setState({name: event.target.value})
    }
    hide = () => {
        this.setState({visible: false});
    }
    handleVisibleChange = (visible) => {
        this.setState({visible});
    }
    daysVisible = (days_visible) => {
        this.setState({days_visible});
    }
    onChange = (value) => {
        this.setState({times: value})
    }
    chooseDay = (day) => {
        let days = this.state.days
        days.indexOf(day) > -1
            ? days.splice(days.indexOf(day), 1)
            : days.push(day)
        this.setState({days: days})
    }
    clearTarget = () => {
        this.setState({name: ''})
        this.setState({times: 1})
        this.setState({
            days: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周末'
            ]
        })
    }
    finishTarget = (row) => {
        console.log(row)
    }
    saveNewTarget = () => {
        if (!this.state.name) {
            message.error('输入打卡任务名哟!')
            return
        }
        this.setState({
            data: [
                ...this.state.data, {
                    name: this.state.name,
                    times: this.state.times,
                    days: this.state.days,
                    finished: 0,
                    counts: 0
                }
            ]
        })
        this.clearTarget()
        message.success('已生成新的打卡任务,加油哟!');
    }
    render() {
        let valid_days = [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周末'
        ]
        let day_item = (valid_days.map((day) => {
            return (
                <div key={day}>
                    <p>{day}</p>
                    <Button
                        type={`${this
                        .state
                        .days
                        .indexOf(day) > -1
                        ? 'primary'
                        : 'dashed'}`}
                        onClick={this
                        .chooseDay
                        .bind(this, day)}
                        shape="circle"
                        size="small"
                        icon="check"/>
                </div>
            )
        }))
        let days = (
            <section className={style.days}>
                {day_item}
            </section>
        )
        let operate_days = (
            <ButtonGroup className={style.operate_days}>
                {valid_days.map((day) => {
                    return (
                        <Button
                            type={`${this
                            .state
                            .days
                            .indexOf(day) > -1
                            ? 'primary'
                            : 'dashed'}`}
                            key={day}
                            onClick={this
                            .chooseDay
                            .bind(this, day)}
                            size="small">{day}</Button>
                    )
                })}
            </ButtonGroup>
        )
        let times = (
            <p>
                <InputNumber
                    min={1}
                    max={10}
                    value={this.state.times}
                    onChange={this.onChange}/>次
            </p>
        )
        let data = (this.state.data.map((data) => {
            let times = []
            for (let i = 0; i < data.times; i++) {
                times.push(<Button
                    type={`${data.finished > i
                    ? 'primary'
                    : 'dashed'}`}
                    shape="circle"
                    size="small"
                    icon="check"
                    onClick={this
                    .finishTarget
                    .bind(this, data)}
                    disabled={i - data.finished > 0}/>)
            }
            return (
                <li>
                    <section className={style.item}>
                        <p>
                            <span className={style.count}>
                                <span
                                    style={{
                                    background: this.state.theme.count
                                }}>
                                    <i>{data.counts}</i>次</span>
                            </span>
                            <span className={style.title}>{data.name}</span>
                        </p>
                        <div>
                            {times.map((time) => time)}
                        </div>
                    </section>
                </li>
            )
        }))
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
                        value={this.state.name}
                        onChange={this.changeName}
                        style={{
                        fontSize: 14,
                        background: this.state.theme.bg_opacity
                    }}></Input>
                    <Row gutter={10}>
                        <Col xs={6}>
                            <Popover
                                content={days}
                                trigger="click"
                                placement="bottom"
                                visible={this.state.days_visible}
                                onVisibleChange={this.daysVisible}>
                                <Button type="primary" shape="circle" icon="calendar"/>
                            </Popover>
                        </Col>
                        <Col xs={6}>
                            <Popover
                                content={times}
                                trigger="click"
                                placement="bottom"
                                visible={this.state.visible}
                                onVisibleChange={this.handleVisibleChange}>
                                <Button type="primary" shape="circle" icon="ellipsis"/>
                            </Popover>
                        </Col>
                        <Col xs={6}>
                            <Button
                                type="primary"
                                shape="circle"
                                icon="check"
                                onClick={this.saveNewTarget}/>
                        </Col>
                        <Col xs={6}>
                            <Button type="primary" shape="circle" icon="close" onClick={this.clearTarget}/>
                        </Col>
                    </Row>
                </div>
                <ul className={style.items}>
                    {data}
                </ul>
                <div className={style.detail}>
                    <h5>
                        <Icon
                            type="menu-unfold"
                            style={{
                            fontSize: 14
                        }}/>
                        <span>{this.state.detail.name}</span>
                        <Icon
                            type="delete"
                            style={{
                            fontSize: 14
                        }}/></h5>
                    <div className={style.item}>
                        <Icon
                            type="calendar"
                            style={{
                            fontSize: 16,
                            padding: '2px 10px'
                        }}/>
                        <div>{operate_days}</div>
                    </div>
                    <div className={style.item}>
                        <Icon
                            type="ellipsis"
                            style={{
                            fontSize: 16,
                            padding: '2px 10px'
                        }}/>
                        <div>{times}</div>
                    </div>
                    <div className={style.item}>
                        <Icon
                            type="star-o"
                            style={{
                            fontSize: 16,
                            padding: '2px 10px'
                        }}/>
                        <div>
                            <Button
                                type="primary"
                                shape="circle"
                                size="small"
                                icon="check"/>
                            <Button
                                type="primary"
                                shape="circle"
                                size="small"
                                icon="check"/>
                            <Button
                                type="primary"
                                shape="circle"
                                size="small"
                                icon="check"/></div>
                    </div>
                    <div
                        className={style.item}
                        style={{
                        alignItems: 'flex-start'
                    }}>
                        <Icon
                            type="edit"
                            style={{
                            fontSize: 16,
                            padding: '2px 10px'
                        }}/>
                        <TextArea rows={4}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect()(List);