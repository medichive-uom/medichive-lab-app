import React, {useState} from "react";
import {Layout, Menu, theme,Button, Flex} from "antd";
import {ExperimentOutlined,UploadOutlined, LogoutOutlined} from "@ant-design/icons";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import './App.css'



const { Sider } = Layout;
function SideBar(){
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <>
            <Button type="primary" onClick={toggleCollapsed} style={{ display:"flex",marginBottom: 160,top:90,left:200,zIndex: 1, }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            } }
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            } }

            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                //width: 250,
                left: 0,
                top: 0,
                bottom: 0,
                left: collapsed ? '-200px' : '0',
                //borderRadius: borderRadiusLG,
            }}>
                <div className="demo-logo-vertical" />
                <div className="demo-logo">Medichive</div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<ExperimentOutlined />}>
                        <Link to="/reports">Reports</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UploadOutlined />}>
                        <Link to="/upload">Upload</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LogoutOutlined />}>
                        <Link to="/logout">Logout</Link>
                    </Menu.Item>
                </Menu>

            </Sider>
        </>
    )

}
export  default SideBar;
