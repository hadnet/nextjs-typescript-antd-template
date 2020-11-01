import React from 'react';
import {PageHeader, Dropdown, Button, Switch} from 'antd';
import {
  CaretDownOutlined,
  HeartOutlined,
  DownOutlined,
  HomeOutlined,
  StarOutlined,
  BulbOutlined,
  BulbFilled,
} from '@ant-design/icons';
import {MenuInfo} from 'rc-menu/es/interface';
import {PageHeaderContainer, VercelLogo, Menu} from '@/components';

type P = {
  dark: boolean;
  setDark: (isChecked: boolean) => void;
};
type S = {
  current: string;
};
export class Header extends React.Component<P, S> {
  state: S = {
    current: 'home',
  };
  handleTabs = (e: MenuInfo) => {
    this.setState({current: e.key as string});
  };
  onChange = (checked: boolean) => {
    this.props.setDark(checked);
  };
  render() {
    const {current} = this.state;
    return (
      <PageHeaderContainer>
        <PageHeader
          title={<VercelLogo fill={this.props.dark ? '#fff' : '#000'} width={`142`} height={`32`} />}
          subTitle={`The React Framework for Production`}
          extra={[
            <Menu key={`menu`} onClick={this.handleTabs} mode={`horizontal`} selectedKeys={[current]}>
              <Menu.Item key={`home`} icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key={`blog`} icon={<StarOutlined />}>
                Blog
              </Menu.Item>
              <Menu.SubMenu key={`submenu`} icon={<CaretDownOutlined />} title={`Submenu`}>
                <Menu.ItemGroup>
                  <Menu.Item key="setting:1">
                    <HeartOutlined />
                    Option 1
                  </Menu.Item>
                  <Menu.Item key="setting:2">
                    <HeartOutlined />
                    Option 2
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={`1`} icon={<StarOutlined />}>
                      option 1
                    </Menu.Item>
                    <Menu.Item key={`2`} icon={<StarOutlined />}>
                      option 2
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button type="text" onClick={e => e.preventDefault()}>
                  Dropdown <DownOutlined />
                </Button>
              </Dropdown>
              <span>
                <Switch
                  checkedChildren={<BulbFilled />}
                  unCheckedChildren={<BulbOutlined />}
                  checked={this.props.dark}
                  onChange={this.onChange}
                />
              </span>
            </Menu>,
          ]}
        />
      </PageHeaderContainer>
    );
  }
}
