import React from 'react';
import '../css/home.css';
import Inquiry from './Inquiry';
import Directions from './Directions';
import Trainers from './Trainers';
import Interior from './Interior';
import Blog from './Blog';
import MainImgs from './MainImgs';

const Home = () => {
    const openNewTab = (address) => {
        window.open(address);
    };
    return (
        <>
            <header>
                <nav id="navbar-example2" className="navbar px-3 mb-3">
                    <a className="navbar-brand" href="#">
                        <img src="./imgs/logo1.png" alt="J2 FITNESS" />
                        <img src="./imgs/logo2.png" alt="J2 FITNESS" />
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading1">
                                등록 문의
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading2">
                                오시는 길
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading3">
                                트레이너
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading4">
                                내부시설
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading5">
                                블로그
                            </a>
                        </li>
                    </ul>
                </nav>
                <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example2"
                    data-bs-root-margin="0px 0px -40%"
                    data-bs-smooth-scroll="true"
                    className="scrollspy-example rounded-2"
                    tabindex="0"
                >
                    <div style={{ height: '100vh' }}>
                        <MainImgs />
                    </div>
                    <div id="scrollspyHeading1" className="main_section">
                        <Inquiry openNewTab={openNewTab} />
                    </div>
                    <div id="scrollspyHeading2" className="main_section">
                        <Directions openNewTab={openNewTab} />
                    </div>
                    <div id="scrollspyHeading3" className="main_section">
                        <Trainers />
                    </div>
                    <div id="scrollspyHeading4" className="main_section">
                        <Interior />
                    </div>
                    <div id="scrollspyHeading5" className="main_section">
                        <Blog openNewTab={openNewTab} />
                    </div>
                </div>
            </header>
            <footer style={{ background: 'gray' }}>
                footerfooterfooterfooterfooterfooterfoo
                <br />
                terfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterf
                <br />
                ooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooter
                <br />
                footerfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfoot
                <br />
                erfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooter
                <br />
                footerfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfoo
            </footer>
        </>
    );
};

export default Home;
