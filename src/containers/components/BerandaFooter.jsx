const BerandaFooter = () => {
    return (
        <>
            <footer className="d-none d-lg-block mg-t-auto">
                <div className="container bd-t ht-100">
                    <div className="d-flex align-items-center row row-xs mg-t-10">
                        <div className="col-lg-10">
                            <span className="tx-medium tx-color-03 tx-13">Copyright &copy; 2022 Institut Teknologi Sepuluh Nopember</span>
                        </div>
                        <div className="col-lg-2 mg-lg-t-0 d-flex justify-content-end">
                            <img src="/images/advhum-blue.png" height="60" className="mg-r-10" />
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="d-lg-none mg-t-auto">
                <div className="container bd-t ht-100">
                    <div className="d-flex align-items-center row row-x mg-t-20">
                        <div className="col-lg-10 d-flex justify-content-center">
                            <span className="tx-medium tx-color-03 tx-13">Copyright &copy; 2022 Institut Teknologi Sepuluh Nopember</span>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src="/images/advhum-blue.png" height="60" className="mg-r-10" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default BerandaFooter;