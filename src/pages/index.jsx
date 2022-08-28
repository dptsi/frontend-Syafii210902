import Head from "next/head";
import BerandaHeroSection from "../containers/beranda/BerandaHeroSection";
import LayoutBeranda from "../containers/beranda/LayoutBeranda";
import AuthSSO from "./auth-sso";

export default function Beranda(props) {

    return (
        <>
            <AuthSSO>
                <Head>
                    <title>NextJS Local</title>
                </Head>
                <LayoutBeranda>
                    <div className="content pd-0 position-relative">
                        <div className="content-body mg-t-60">
                            <div className="container pd-x-0" id="content">
                                <div className="row row-sm">
                                    <BerandaHeroSection />
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutBeranda>
            </AuthSSO>
        </>
    )
}
