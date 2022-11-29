import Link from "next/link";
import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"

const AccessDenied = () => {
	
    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en

	return (
		<>
			<div className="content pd-0" style={{ position: "relative" }}>
				<div className="content-body mg-t-10 mg-md-t-30 mg-lg-t-40">
					<div className="container pd-x-0 pd-y-80" id="content">
						<div className="row row-sm">
							<div className="col-12">
								<div className="d-flex justify-content-center mg-b-30">
									<img src="/images/error/Error-404.png" className="wd-50p wd-md-30p wd-lg-20p" />
								</div>
								<p className="tx-poppins tx-medium tx-24 mg-b-5 text-center">{langData?.error_404}</p>
								<p className="mg-0 tx-16 text-center">{langData?.error_404_text}</p>
								<div className="d-flex justify-content-center mg-t-15">
									<Link href="/">
										<a className="btn btn-its-1 tx-poppins tx-medium" role="button">{langData?.back_home}</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccessDenied;
