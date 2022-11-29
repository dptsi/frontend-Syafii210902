import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"
import Head from "next/head";

const AdminSection = () => {

    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en

    return (
        <>
            <Head>
                <title>{langData?.admin} • myITS Base NextJS</title>
            </Head>
            <div className="d-flex align-items-center justify-content-between mg-b-20 mg-sm-b-25 mg-lg-b-25">
                <div className="d-flex align-items-center justify-content-start">
                    <h4 className="tx-poppins tx-medium mg-b-0">{langData?.admin}</h4>
                </div>
            </div>
            <div className="row row-sm">
                <div className="col-12 mg-b-20 mg-md-b-30 ht-70 ht-md-90 d-flex align-items-center justify-content-start">
                    <img src="/images/admin.svg" className="wd-40 ht-40 mg-r-15 wd-md-45 ht-md-45 mg-md-r-20" />
                    <div>
                        <h5 className="tx-poppins tx-medium mg-b-0">{langData?.admin_page}</h5>
                        <p className="tx-color-03 mg-b-0">{langData?.admin_page_text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSection;