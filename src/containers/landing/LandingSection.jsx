import { signIn } from "next-auth/react";

const LandingSection = () => {
    return (
        <>
            <div className='row row-sm mg-t-80'>
                <div className="col-12 ht-250 ht-md-400 ht-xxl-700 d-flex align-items-center">
                    <div className="pd-l-30">
                        <div className="d-flex justify-content-start mg-b-10">
                            <div className="d-flex align-items-center">
                                <img src="/images/logo-myits-white.svg" className="ht-25 ht-md-30 mg-t-5" />
                                <p className="tx-poppins tx-medium tx-white tx-28 tx-md-32 tx-spacing-2 mg-b-0 mg-l-10">Base NextJS</p>
                            </div>
                        </div>
                        <h3 className="tx-poppins tx-white tx-32 tx-md-36 tx-xl-40 mg-b-10 mg-lg-b-10">Selamat datang di <br /><span className="tx-semibold">myITS Base NextJS</span></h3>
                        <h5 className="tx-white mg-b-35 tx-14 tx-md-18">Eksplorasi ITS di sini.</h5>
                        <button className="btn btn-its-3 tx-poppins tx-medium" role="button" onClick={() => signIn("myits")}>Masuk</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingSection;