import React from 'react';
import '../css/home.css';
import Inquiry from './Inquiry';
import Directions from './Directions';
import Trainers from './Trainers';
import Interior from './Interior';
import Blog from './Blog';
import MainImgs from './MainImgs';
import Swal from 'sweetalert2';

const Home = () => {
    const openNewTab = (address) => {
        window.open(address);
    };

    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            Swal.fire({
                icon: 'success',
                title: text,
                text: '전화번호가 정상적으로 복사되었습니다.',
            });
        } catch (error) {
            alert('복사 실패!');
        }
    };
    return (
        <>
            <header>
                <nav id="navbar-example2" className="navbar px-3 mb-3">
                    <a className="navbar-brand" href="#">
                        <img src="./imgs/logo1.png" alt="J2 FITNESS" />
                        <img src="./imgs/logo2.png" alt="J2 FITNESS" />
                    </a>
                    <ul className="nav nav-pills ">
                        <li className="nav-item ">
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
            <footer>
                <div className="footer-wrap">
                    <div className="footer-underline-box">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <img src="./imgs/logo1.png" alt="J2 FITNESS" />
                                <img src="./imgs/logo2.png" alt="J2 FITNESS" />
                            </div>
                            <div className="contents-small-circles">
                                <div
                                    className="small-circle"
                                    onClick={() => openNewTab('https://www.instagram.com/j2_fitness_official/')}
                                >
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                                <div
                                    className="small-circle"
                                    onClick={() => openNewTab('https://www.youtube.com/watch?v=iIrF75Kk6uQ')}
                                >
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                                <div
                                    className="small-circle"
                                    onClick={() => openNewTab('https://blog.naver.com/hyun6290')}
                                >
                                    <img className="footer-naver-blog" src="./imgs/blog.png" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-right">
                            <div className="flex">
                                <div className="footer-info-wrap">
                                    <h6 className="footer-info mb-2">예약 / 상담 / 문의</h6>
                                    <h5 className="footer-info mb-3">Tel. 051-891-8766</h5>
                                </div>
                                <div className="contact-small-circles">
                                    <div className="small-circle">
                                        <i
                                            class="fa-solid fa-phone"
                                            onClick={() => handleCopyClipBoard('051-891-8766')}
                                        ></i>
                                    </div>
                                    <div className="small-circle">
                                        <img
                                            className="kakao-black"
                                            src="./imgs/contact/kakao-black.png"
                                            onClick={() => openNewTab('https://open.kakao.com/o/s0OcyAhb')}
                                        />
                                    </div>
                                    <div className="small-circle">
                                        <img
                                            className="naver-talk-black"
                                            src="./imgs/contact/naver-talk-black.png"
                                            onClick={() =>
                                                openNewTab('https://talk.naver.com/ct/wc2kmy?frm=mnmb&frm=nmb_detail')
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="available-time">
                                <p>상담 가능 시간</p>
                                <p>평일 9:00 ~ 22:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>대표 : 김성주, 조태현</p>
                        <p>주소 : 부산 부산진구 가야대로 473 송원빌딩 B1F 제이투피트니스</p>
                        <p>Copyright© 2024 J2 FITNESS. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
