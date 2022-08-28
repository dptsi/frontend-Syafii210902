const SSOLoading = () => {
	return (
		<>
			<div className="content pd-0" style={{ position: "relative" }}>
				<div className="content-body mg-t-10 mg-md-t-30 mg-lg-t-40">
					<div className="container pd-x-0" id="content">
						<div className="row row-sm">
							<div className="col-12">
								<div className="d-flex justify-content-center align-items-center mg-b-50">
									<img src="/images/error/Error-state.png" className="wd-70p wd-md-50p wd-lg-30p" />
								</div>
								<p className="tx-poppins tx-medium tx-32 tx-md-36 tx-xl-40 mg-b-5 text-center">Signing In</p>
								<p className="mg-b-15 tx-16 tx-md-18 text-center">Harap tunggu sebentar, proses Sign In sedang berjalan.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SSOLoading;
