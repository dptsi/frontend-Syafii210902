import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"

const SSOFooter = () => {

    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en

    const yearNow = new Date().getFullYear()
    return (
        <>
            <footer className="d-none d-lg-block mg-t-auto">
                <div className="container ht-100">
                    <div className="d-flex align-items-center row row-xs mg-t-10">
                        <div className="col-lg-10">
                            <span className="tx-medium tx-white tx-13">Copyright &copy; {yearNow} {langData?.its}</span>
                        </div>
                        <div className="col-lg-2 mg-lg-t-0 d-flex justify-content-end">
                            <img src="/images/advhum-white.png" height="60" className="mg-r-10" />
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="d-lg-none mg-t-auto">
                <div className="container ht-100">
                    <div className="d-flex align-items-center row row-x mg-t-20">
                        <div className="col-lg-10 d-flex justify-content-center">
                            <span className="tx-medium tx-white tx-13">Copyright &copy; {yearNow} {langData?.its}</span>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src="/images/advhum-white.png" height="60" className="mg-r-10" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default SSOFooter;