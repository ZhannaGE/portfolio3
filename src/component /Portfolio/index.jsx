function Portfolio() {
    return(
        <div className="portfolio">
                <div className="portfolio-container">
                    <section className="title-section">
                        <h1>my <span>portfolio</span></h1>
                        <span className="title-bg">works</span>
                    </section>
                    <div className="portfolio-grid-container">
                        <div className="grid-container">
                            <a href="#"
                               className="grid-item1 grid-item">
                                <div className="hint">my first hint</div>
                            </a>
                            <a href="https://zhannage.github.io/myGardens/pages/index.html"
                               className="grid-item2 grid-item">
                                <div className="hint ">my second hint</div>
                            </a>
                            <a href="https://zhannage.github.io/SquareGame/" className="grid-item3 grid-item"></a>
                            <a href="#" className="grid-item1 grid-item"></a>
                            <a href="#" className="grid-item2 grid-item"></a>
                            <a href="#" className="grid-item3 grid-item"></a>
                            <a href="#" className="grid-item1 grid-item"></a>
                            <a href="#" className="grid-item2 grid-item"></a>
                            <a href="#" className="grid-item3 grid-item"></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;