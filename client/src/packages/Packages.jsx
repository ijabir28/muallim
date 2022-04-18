export {Packages};

function Packages() {
    const packages = [
        {
            name: 'Economy 3 star Umrah Package',
            details: '12-14 days\n' +
                'Visa, Air ticket, Transport & Ziyarah\n' +
                'Accommodation in Makkah & Madinah\n' +
                'Travel Date-13-16 APR',
            price: 140000.00
        },
        {
            name: 'After Eid- Ul- Fitre Umrah Package',
            details: '12-14 days\n' +
                'Visa, Air ticket, Transport & Ziyarah\n' +
                'Accommodation in Makkah & Madinah\n' +
                'Travel Date-4/5/6/7-May',
            price: 130000.00
        },
        {
            name: 'Ramadan Umrah Package 2022 First 14Days',
            details: '14 days\n' +
                'Visa, Air ticket, Transport & Ziyarah\n' +
                'Accommodation in Makkah & Madinah\n' +
                'Travel Date - 4/5/6/7 Apr',
            price: 140000.00
        },
        {
            name: 'Ramadan Umrah Package 2022 Last 14Days',
            details: '12-14 days\n' +
                'Visa, Air ticket, Transport & Ziyarah\n' +
                'Accommodation in Makkah & Madinah\n' +
                'Travel Date - 18/19/20/22 Apr',
            price: 175000.00
        },
        {
            name: 'Premium Umrah Packages 2022',
            details: '7/14 days\n' +
                'Visa, Air ticket, Transport & Ziyarah\n' +
                'Accommodation in Makkah & Madinah\n' +
                'Travel Date - 16/20/25 MARCH',
            price: 200000.00
        }
    ];
    const listItems = packages.map((pckg) =>
        <div className="col-lg-4">
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
    );

    return (
        <div className="App">
            <h1>Packages</h1>
            <div class="carousel slide carousel-dark text-center"
                 data-mdb-ride="carousel"
            >
                <div class="d-flex justify-content-center mb-4">
                    <button
                        class="carousel-control-prev position-relative"
                        type="button"
                        data-mdb-target="#carouselMultiItemExample"
                        data-mdb-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next position-relative"
                        type="button"
                        data-mdb-target="#carouselMultiItemExample"
                        data-mdb-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="carousel-inner py-4">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row">

                                {listItems}

                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-12">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                            class="card-img-top"
                                            alt="Fissure in Sandstone"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                            class="card-img-top"
                                            alt="Storm Clouds"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                            class="card-img-top"
                                            alt="Hot Air Balloons"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                            class="card-img-top"
                                            alt="Peaks Against the Starry Sky"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                            class="card-img-top"
                                            alt="Bridge Over Water"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                            class="card-img-top"
                                            alt="Purbeck Heritage Coast"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
