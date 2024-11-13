function PopularService() {
    return (
        <>
            <div className="popular-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Popular Services</h2>
                                <p>Popular services that we offer to our customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <i className="fa fa-wrench"></i>
                                <h3>Repair</h3>
                                <p>Repair your electronic devices with our expert technicians.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <i className="fa fa-cogs"></i>
                                <h3>Installation</h3>
                                <p>Install your electronic devices with our expert technicians.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <i className="fa fa-cog"></i>
                                <h3>Maintenance</h3>
                                <p>Maintain your electronic devices with our expert technicians.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { PopularService };