import '../css/interior.css';

const Interior = () => {
    return (
        <section>
            <h3>내부시설</h3>
            <div className="j2-interior">
                <table className="j2-interior-table">
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img1.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img2.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img3.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img4.jpeg"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img2.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img3.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img4.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img1.jpeg"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img3.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img4.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img1.jpeg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    src="./imgs/carousel-img2.jpeg"
                                    alt=""
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <!-- Modal START--> */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                머신 이름?
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <img src="./imgs/carousel-img2.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal END--> */}
        </section>
    );
};

export default Interior;
