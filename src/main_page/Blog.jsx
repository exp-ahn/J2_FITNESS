import '../css/blog.css';

const Blog = ({ openNewTab }) => {
    return (
        <section>
            <h3 onClick={() => openNewTab('https://blog.naver.com/hyun6290')}>블로그</h3>
            <div className="flex">
                <img
                    className="blog-main-img"
                    src="./imgs/blog-main.png"
                    onClick={() => openNewTab('https://blog.naver.com/hyun6290')}
                />
            </div>
        </section>
    );
};

export default Blog;
