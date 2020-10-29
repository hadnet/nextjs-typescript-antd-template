import React from 'react';
import Image from 'next/image';
import {PageHeader, Dropdown, Button} from 'antd';
import {CaretDownOutlined, HeartOutlined, DownOutlined, HomeOutlined, StarOutlined} from '@ant-design/icons';
import {MenuInfo} from 'rc-menu/es/interface';
import {PageHeaderContainer, Menu} from '@/components';

type P = unknown;
type S = {current: React.Key};
export class Header extends React.Component<P, S> {
  state = {
    current: 'home',
  };
  handleTabs = (e: MenuInfo) => {
    this.setState({current: e.key});
  };
  render() {
    const {current} = this.state;
    return (
      <PageHeaderContainer>
        <PageHeader
          title={<Image src="/vercel.svg" width="142" height="32" />}
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
            </Menu>,
          ]}
        />
      </PageHeaderContainer>
    );
  }
}
