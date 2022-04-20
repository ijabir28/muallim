import {useEffect, useState} from "react";

export {agency};

function agency() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [agency, setagency] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/agency/get")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setagency(result);
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
                

                <div className="carousel slide carousel-dark text-center"
                     data-mdb-ride="carousel">
                        <section id="pack" class="agency">
                            <div class="container">
                                <div class="gallary-header text-center">
                                    <h1>Agency</h1>

				                    <p>
				                    	Most Popular Hajj Agency 2023 -2024 from Dhaka, Bangladesh
				                    </p>
			                    </div>
			                    <div class="packages-content">
			                    	<div class="row">
                                        <div class="col-md-4 col-sm-6">
                                            <div class="single-package-item">
                                                <img src="assets/images/packages/p1.jpg" alt="package-place">
                                                    <div class="single-package-item-txt">
								            <h3> Air Touch Limited<span class="pull-right"> </h3>
									            <div class="packages-para">
										<h3>License No. 0002</h3>
										<i class="fa fa-angle-right"></i>  Phone: 9031301,01713064642 <br>
										 <i class="fa fa-angle-right"></i> HOUSE NO: 121, ROAD NO: 3, BLOK: A, SECTION: 12, MIRPUR, PALLABI, DHAKA-1216, BANGLADESH. <br>
										<i class="fa fa-angle-right"></i> Email: airtouch.sharatati@gmail.com <br>
										<br>
									</div>				 

								
								<div class="packages-review">
									<p>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<span>2544 review</span>
									</p>
								</div>
								<div class="about-btn">
									<button  class="about-view packages-btn">
										<a href="https://prp.pilgrimdb.org/agencies/0002">Contact US</a>
									</button>
								</div>
							</div>
						</div>

					</div>
				
					<div class="col-md-4 col-sm-6">
						<div class="single-package-item">
							<img src="assets/images/packages/p1.jpg" alt="package-place">
							<div class="single-package-item-txt">
								<h3>Aftab Travels & Tours <span class="pull-right"> </h3>
									
								<div class="packages-para">
									<h3>License No. 0003</h3>
									<i class="fa fa-angle-right"></i>  Phone: 8362630,9348565,01711 242471 <br>
								 	<i class="fa fa-angle-right"></i> 70, Nayapaltan, 3rd Floor, Dhaka-1000. <br>
									<i class="fa fa-angle-right"></i> Email: mdashraf0203@yahoo.com <br>
									<br>
								</div>
								<div class="packages-review">
									<p>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<span>2544 review</span>
									</p>
								</div>
								<div class="about-btn">
									<button  class="about-view packages-btn">
										<a href="https://prp.pilgrimdb.org/agencies/0003">Contact US</a>
									</button>
								</div>
							</div>
						</div>

					</div>
					<div class="col-md-4 col-sm-6">
						<div class="single-package-item">
							<img src="assets/images/packages/p1.jpg" alt="package-place">
							<div class="single-package-item-txt">
								<h3>Air Trip International Ltd<span class="pull-right"> </span></h3>
								<div class="packages-para">
									<h3>License No. 0004</h3>
									<i class="fa fa-angle-right"></i>  Phone: 9353512 <br>
									<i class="fa fa-angle-right"></i>  City Heart, Suite # 5/3 (4th Floor), 67, Nayapaltan, VIP Road, Dhaka-1000.<br>
									<i class="fa fa-angle-right"></i>  Email : airtrip@timesgroupbd.com <br><br>
									
								</div>
								<div class="packages-review">
									<p>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<span>2544 review</span>
									</p>
								</div>
								<div class="about-btn">
									<button  class="about-view packages-btn">
										<a href="https://prp.pilgrimdb.org/agencies/0004">Contact US</a>
									</button>
								</div>
							</div>
						</div>
					</div>
					        <div class="col-md-4 col-sm-6">
					        	<div class="single-package-item">
							        <img src="assets/images/packages/p1.jpg" alt="package-place">
							    <div class="single-package-item-txt">
								<h3>Air Bangla International Ltd.<span class="pull-right"> </span></h3>
								            <div class="packages-para">
								        	    <h3>License No. 0005</h3>
								        	    <i class="fa fa-angle-right"></i>  Phone: 615858 <br>
								        	    <i class="fa fa-angle-right"></i>  Hotel Golden Inn Building, 336, Station Road, Chittagong..<br>
								        	    <i class="fa fa-angle-right"></i>  Email : airbangla@live.com <br><br>
            
								            </div>
								                <div class="packages-review">
									            <p>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
									            	<i class="fa fa-star"></i>
									            	<i class="fa fa-star"></i>
									            	<i class="fa fa-star"></i>
									            	<span>2544 review</span>
								            	</p>
								                </div>
								                    <div class="about-btn">
									                    <button  class="about-view packages-btn">
								                		<a href="https://prp.pilgrimdb.org/agencies/0004">Contact US</a>
								                    	</button>
								                    </div>
							                    </div>
					                    	</div>
				                        </div>
		                        	</div>
		                        </div>

	                </section>
	
                </div>
            </div>
        )
    }
}

