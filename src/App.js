import './App.css';

const openNewTab = (address) => {
    window.open(address);
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {' '}
                <a onClick={() => openNewTab('https://www.instagram.com/j2_fitness_official/')}>인스타그램</a>
                <a onClick={() => openNewTab('https://map.naver.com/p/entry/place/1108438557?c=14.63,0,0,0,dh')}>
                    네이버지도
                </a>
                <a onClick={() => openNewTab('https://blog.naver.com/dmfmtm')}>블로그</a>
                <a onClick={() => openNewTab('https://open.kakao.com/o/s0OcyAhb')}>오픈카톡</a>
                <a onClick={() => openNewTab('https://talk.naver.com/ct/wc2kmy?frm=mnmb&frm=nmb_detail')}>네이버톡톡</a>
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    modal
                </button>
                {/* <!-- Modal --> */}
                <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    testtest
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
