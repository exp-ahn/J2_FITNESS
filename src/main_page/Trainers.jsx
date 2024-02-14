import '../css/trainers.css';

const Trainers = () => {
    return (
        <section>
            <h3>트레이너</h3>
            <div className="j2-trainers">
                <div className="trainers">
                    <img className="trainer-img" src="./imgs/trainers/Kim/trainer-kim.jpeg" alt="" />
                    <h4>김 성 주</h4>
                </div>
                <div className="trainers">
                    <img className="trainer-img" src="./imgs/trainers/Jo/trainer-jo.jpeg" alt="" />

                    <h4>조 태 현</h4>
                </div>
                <div className="trainers">
                    <img className="trainer-img" src="./imgs/trainers/Lim/trainer-lim.jpeg" alt="" />

                    <h4>임 수 진</h4>
                </div>
                <div className="trainers">
                    <img className="trainer-img" src="./imgs/trainers/Park/trainer-park.jpeg" alt="" />

                    <h4>박 도 연</h4>
                </div>
                <div className="trainers">
                    <img className="trainer-img" src="./imgs/trainers/Beak/trainer-Beak.jpeg" alt="" />

                    <h4>백 인 호</h4>
                </div>
            </div>
        </section>
    );
};

export default Trainers;
