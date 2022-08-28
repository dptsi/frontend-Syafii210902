const SSOHeader = () => {
    return (
        <>
            <div className='d-flex justify-content-center mg-b-40 pd-y-10'>
                <img src="/images/myITS-SSO.svg" className="wd-35 wd-md-45 mg-r-10 mg-md-r-15" />
                <div className='d-flex align-items-center'>
                    <img src='/images/logo-myits-white.svg' className='ht-25 ht-md-30 mg-t-5' />
                    <p className='tx-poppins tx-medium tx-white tx-18 tx-md-22 tx-spacing-2 mg-b-0 mg-l-5 mg-md-l-10'>SSO</p>
                    <p className='tx-12 tx-color-03 mg-b-0 mg-l-10'>1.0.0</p>
                </div>
            </div>
        </>
    );
};

export default SSOHeader;
