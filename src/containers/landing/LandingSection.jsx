import { signIn } from "next-auth/react";

const LandingSection = () => {
    return (
        <>
            <div className='row row-sm'>
                <div className="col-12 ht-250 ht-md-400 ht-xxl-750 d-flex align-items-center">
                    <div>
                        <div className="d-flex justify-content-start mg-b-10">
                            <div className="d-flex align-items-center">
                                <img src="/images/logo-myits-white.svg" className="ht-25 ht-md-30 mg-t-5" />
                                <p className="tx-poppins tx-medium tx-white tx-18 tx-md-22 tx-spacing-2 mg-b-0 mg-l-10">NextJS Local</p>
                            </div>
                        </div>
                        <h3 className="tx-poppins tx-white tx-32 tx-md-36 tx-xl-40 mg-b-10 mg-lg-b-10">Selamat datang di <br /><span className="tx-semibold">NextJS Local</span></h3>
                        <h5 className="tx-white mg-b-35 tx-14 tx-md-18">Eksplorasi ITS di sini.</h5>
                        <a className="btn btn-its-3 tx-poppins tx-medium" role="button" onClick={() => signIn("myits")}> Masuk</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingSection;