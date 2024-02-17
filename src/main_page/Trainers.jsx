import { useEffect } from 'react';
import '../css/trainers.css';
import useScrollFadeIn from './useScrollFadeIn';

const Trainers = () => {
    const fadeIn1 = useScrollFadeIn('up', 1.3, 2.2);
    const fadeIn2 = useScrollFadeIn('up', 1.3, 2);
    const fadeIn3 = useScrollFadeIn('up', 1.3, 1.8);
    const fadeIn4 = useScrollFadeIn('up', 1.3, 2);
    const fadeIn5 = useScrollFadeIn('up', 1.3, 2.2);

    const elements = [fadeIn1, fadeIn2, fadeIn3, fadeIn4, fadeIn5];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // 해당 비율 이상이 화면에 드러나면 감시됨
        };

        const callback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // 현재 감시된 요소가 화면에 나타나면 500ms 후에 나타나도록 설정
                    setTimeout(() => {
                        elements[index].ref.current.style.transition = 'opacity 0.5s ease-in-out';
                        elements[index].ref.current.style.opacity = 1;
                    }, 500);
                    // 해당 요소 감시 중지
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, observerOptions);

        // 모든 요소를 감시 대상으로 등록
        elements.forEach((element) => {
            if (element.ref.current) {
                observer.observe(element.ref.current);
            }
        });

        return () => observer.disconnect();
    }, [elements]);

    return (
        <section>
            <h3>트레이너</h3>
            <div className="j2-trainers">
                <div className="trainers zoom-in" ref={fadeIn1?.ref} style={fadeIn1?.style}>
                    <figure>
                        <img className="trainer-img" src="./imgs/trainers/Kim/trainer-kim.jpeg" />
                        <h4>김 성 주</h4>
                    </figure>
                </div>
                <div className="trainers zoom-in" ref={fadeIn2?.ref} style={fadeIn2?.style}>
                    <figure>
                        <img className="trainer-img" src="./imgs/trainers/Jo/trainer-jo.jpeg" />
                        <h4>조 태 현</h4>
                    </figure>
                </div>
                <div
                    className="trainers zoom-in"
                    ref={fadeIn3?.ref}
                    style={fadeIn3?.style}
                    data-bs-toggle="modal"
                    data-bs-target="#trainerModal"
                >
                    <figure>
                        <img
                            className="trainer-img"
                            src="./imgs/trainers/Lim/trainer-lim.jpeg"
                            data-bs-toggle="modal"
                            data-bs-target="#trainerModal"
                        />
                        <h4>임 수 진</h4>
                    </figure>
                </div>
                <div className="trainers zoom-in" ref={fadeIn4?.ref} style={fadeIn4?.style}>
                    <figure>
                        <img className="trainer-img" src="./imgs/trainers/Park/trainer-park.jpeg" />
                        <h4>박 도 연</h4>
                    </figure>
                </div>
                <div className="trainers zoom-in" ref={fadeIn5?.ref} style={fadeIn5?.style}>
                    <figure>
                        <img className="trainer-img" src="./imgs/trainers/Beak/trainer-Beak.jpeg" />
                        <h4>백 인 호</h4>
                    </figure>
                </div>
            </div>
            {/* <!-- Modal START--> */}
            <div
                className="modal fade"
                id="trainerModal"
                tabindex="-1"
                aria-labelledby="trainerModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body flex">
                            <img
                                className="trainer-img-modal"
                                src="./imgs/trainers/Lim/trainer-lim.jpeg"
                                alt="임대장 트레이너"
                            />
                            <div className="trainer-detail">
                                <h3 className="GM-Sans">임대장 트레이너</h3>
                                <h4>경력 및 수상내역</h4>
                                <ul className="award-list">
                                    <li>2023 IFBB PRO 취득</li>
                                    <li>2022 무사코리아 광주 피규어 1위 그랑프리</li>
                                    <li>2022 무사코리아 부산 피규어 1위 그랑프리</li>
                                    <li>2020 피트니스스타 김해 피규어 1위 그랑프리</li>
                                    <li>2020 나바코리아 피규어 1위 그랑프리</li>
                                    <li>2019 미스터해운대 우먼피지크 1위</li>
                                    <li>2019 피트니스스타 창원 피규어 1위 그랑프리</li>
                                    <li>2018 미스터해운대 바디피트니스 1위</li>
                                    <li>2018 피트니스스타 부산 피규어 1위 그랑프리</li>
                                    <li>2017 나바코리아 톤피규어 1위 그랑프리</li>
                                    <li>동서대학교 운동처방학과 졸업</li>
                                </ul>
                            </div>
                            {/* <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal END--> */}
        </section>
    );
};

export default Trainers;
