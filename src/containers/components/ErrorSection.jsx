const ErrorSection = ({ children }) => {

    return (
        <>
            <div className="content pd-0 position-relative">
                <div className="content-body mg-t-15 mg-md-t-45 mg-lg-t-60">
                    <div className="container pd-x-0" id="content">
                        <div className="row row-sm">
                            <div className="col-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorSection;