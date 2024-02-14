import '../css/main-imgs.css';

const MainImgs = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./imgs/carousel-img1.jpeg" className="carousel-imgs" />
                </div>
                <div className="carousel-item">
                    <img src="./imgs/carousel-img2.jpeg" className="carousel-imgs" />
                </div>
                <div className="carousel-item">
                    <img src="./imgs/carousel-img3.jpeg" className="carousel-imgs" />
                </div>
                <div className="carousel-item">
                    <img src="./imgs/carousel-img4.jpeg" className="carousel-imgs" />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MainImgs;
