import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Reports from "./pages/Reports";
import Upload from "./pages/Upload";
import Logout from "./pages/Logout";
import {Layout, theme} from "antd";


const {Content} = Layout;

function ContentDetails() {


    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Content style={{
            margin: '0.5vw 1vw 0 1vw', overflow: 'initial', position: 'absolute', top: '15vh',
            left: 200, zIndex:-2,
        }}>
            <div
                style={{
                    minHeight: '100vh',
                    minWidth:  '84vw',
                    color: 'black',
                    padding: 24,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >


                <Routes>
                    <Route path="/reports" element={<Reports/>}/>
                    <Route path="/upload" element={<Upload/>}/>
                    <Route path="/logout" element={<Logout/>}/>


                </Routes>

            </div>
        </Content>
    )
}

export default ContentDetails;