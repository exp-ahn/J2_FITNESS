import KakaoMap from './KakaoMap';
import '../css/directions.css';

const Directions = ({ openNewTab }) => {
    return (
        <section>
            <h3>오시는 길</h3>
            <p>
                개금역 2번 출구에서 도보로 단<strong>"3분"</strong>거리
            </p>
            <div className="flex">
                <div style={{ background: 'gray', width: '550px', height: '450px', lineHeight: '450px' }}>
                    지도 추가 예정
                </div>
                {/* <KakaoMap /> */}

                <div>
                    <div className="flex">
                        <div
                            className="map-button kakao-map-button"
                            onClick={() => openNewTab('https://map.kakao.com/?map_type=TYPE_MAP&itemId=245166832')}
                        >
                            <img src="./imgs/map-icons/kakao/kakaomap_horizontal_ko.png" alt="카카오 맵" />
                        </div>
                        <div
                            className="map-button naver-map-button"
                            onClick={() =>
                                openNewTab('https://map.naver.com/p/entry/place/1108438557?c=14.63,0,0,0,dh')
                            }
                        >
                            <img src="./imgs/map-icons/naver/Map_Service_Icon.png" alt="네이버 지도" />
                            <img src="./imgs/map-icons/naver/___Logotype________WH.png" alt="네이버 지도" />
                        </div>
                    </div>
                    <div className="detail-info">
                        <ul>
                            <h4>J2 FITNESS(제이투피트니스)</h4>
                            <li>
                                <p>부산 부산진구 가야대로 473 송원빌딩 B1F 제이투피트니스</p>
                            </li>
                            <h5>전화번호</h5>
                            <li>
                                <p>051-891-8766</p>
                            </li>
                            <h5>운영시간</h5>
                            <li>
                                <p>
                                    매일 <strong>00:00 - 24:00 </strong> (연중무휴)
                                </p>
                            </li>
                            <h5>상담 가능 시간</h5>
                            <li>
                                <p>
                                    월 ~ 금 <strong>10:00 - 21:00</strong>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Directions;
