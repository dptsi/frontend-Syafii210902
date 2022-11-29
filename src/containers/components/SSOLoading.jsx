const SSOLoading = () => {
	return (
		<>
			<div className="content pd-0 preloader" style={{ position: "relative" }}>
				<div className="row pd-0 mg-0 ht-100p align-items-center">
					<div className="col-12 pd-0">
						<div className="d-flex justify-content-center align-items-center">
							<img src="/images/logo-myits-blue.svg" className="wd-100 mg-t-10" />
							<p className="tx-poppins tx-medium tx-40 tx-color-01 mg-b-0 mg-l-10">Base NextJS</p>
						</div>
						<div className="d-flex justify-content-center align-items-center mg-t-20">
							<div className="spinner-border" role="status"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SSOLoading;
