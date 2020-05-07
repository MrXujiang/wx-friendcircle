import React from 'react';
import { Popover, NavBar, Icon, NoticeBar } from 'antd-mobile';

const Item = Popover.Item;

class Header extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    console.log(opt)
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    window.location.href = opt.key === '1' ? 
    'http://mp.weixin.qq.com/mp/homepage?__biz=MzU2Mzk1NzkwOA==&hid=4&sn=efd11249c0dddfbd049a1a6fc6ba4fc3&scene=18#wechat_redirect'
    : 'http://mp.weixin.qq.com/mp/homepage?__biz=MzU2Mzk1NzkwOA==&hid=3&sn=f2e1f2cb731352aed2602b97f4a72016&scene=18#wechat_redirect'
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (<div>
      <NavBar
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="1" value="scan" data-seed="logId">学习打卡</Item>),
              (<Item key="2" value="special" style={{ whiteSpace: 'nowrap' }}>实战项目</Item>)
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        趣谈前端-朋友圈
      </NavBar>
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        通知: 趣谈前端公众号开启内部朋友圈功能,大家可以把平时的生活,开心或者不开心的事分享出来哈~
      </NoticeBar>
    </div>);
  }
}

export default Header
