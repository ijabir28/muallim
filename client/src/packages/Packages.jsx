import {useEffect, useState} from "react";

export {Packages};

function Packages() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/package/get")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPackages(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <h1>Packages</h1>
                <div className="carousel slide carousel-dark text-center"
                     data-mdb-ride="carousel"
                >
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            className="carousel-control-prev position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel-inner py-4">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    {
                                        packages.map((pckg) =>
                                            <div className="col-lg-4" key={pckg._id}>
                                                <div className="card">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                                        className="card-img-top"
                                                        alt="Waterfall"
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{pckg.name}</h5>
                                                        <p className="card-text">
                                                            {pckg.details}
                                                        </p>
                                                        <p>
                                                            <b className="card-text">
                                                                {pckg.price}
                                                            </b>
                                                        </p>
                                                        <a href="#!" className="btn btn-primary">Button</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                                className="card-img-top"
                                                alt="Fissure in Sandstone"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the
                                                    bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                                className="card-img-top"
                                                alt="Storm Clouds"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the
                                                    bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                                className="card-img-top"
                                                alt="Hot Air Balloons"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the
                                                    bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                                className="card-img-top"
                                                alt="Peaks Against the Starry Sky"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the
                                                    bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                                className="card-img-top"
                                                alt="Bridge Over Water"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the
                                                    bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                                className="card-img-top"
                                                alt="Purbeck Heritage Coast"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make up the
                                                    bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" className="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

