import '../css/inquiry.css';

const Inquiry = ({ openNewTab }) => {
    return (
        <section>
            <h3>등록 문의</h3>
            <div className="contact-way-list">
                <div className="contact-way-card">
                    <div className="underline-box">
                        <img
                            src="./imgs/contact/kakao.png"
                            alt=""
                            onClick={() => openNewTab('https://open.kakao.com/o/s0OcyAhb')}
                        />
                        <h4 onClick={() => openNewTab('https://open.kakao.com/o/s0OcyAhb')}>오픈 카톡</h4>
                    </div>
                    <div className="contact-way">
                        오픈 카톡 관련 설명 주저리 주저리오픈 카톡 관련 설명 주저리 주저리오픈 카톡 관련 설명 주저리
                        주저리오픈 카톡 관련 설명 주저리 주저리
                    </div>
                </div>
                <div className="contact-way-card">
                    <div className="underline-box">
                        <img
                            src="./imgs/contact/instagram.png"
                            alt=""
                            onClick={() => openNewTab('https://www.instagram.com/j2_fitness_official/')}
                        />
                        <h4 onClick={() => openNewTab('https://www.instagram.com/j2_fitness_official/')}>인스타그램</h4>
                    </div>
                    <div className="contact-way">
                        인스타그램 관련 설명 주저리 주저리인스타그램 관련 설명 주저리 주저리인스타그램 관련 설명 주저리
                        주저리인스타그램 관련 설명 주저리 주저리인스타그램 관련 설명 주저리 주저리
                    </div>
                </div>
                <div className="contact-way-card">
                    <div className="underline-box">
                        <img
                            src="./imgs/contact/naver-talk.png"
                            alt=""
                            onClick={() => openNewTab('https://talk.naver.com/ct/wc2kmy?frm=mnmb&frm=nmb_detail')}
                        />
                        <h4 onClick={() => openNewTab('https://talk.naver.com/ct/wc2kmy?frm=mnmb&frm=nmb_detail')}>
                            네이버 톡톡
                        </h4>
                    </div>
                    <div className="contact-way">
                        네이버 톡톡 관련 설명 주저리 주저리네이버 톡톡 관련 설명 주저리 주저리네이버 톡톡 관련 설명
                        주저리 주저리네이버 톡톡 관련 설명 주저리 주저리네이버 톡톡 관련 설명 주저리 주저리
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inquiry;
