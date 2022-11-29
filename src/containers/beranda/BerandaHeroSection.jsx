import { useSession } from "next-auth/react";
import Link from "next/link"
import { ArrowRight } from "react-feather";
import useSWRImmutable from "swr/immutable";
import axios from "axios";
import AppText from "../../lang/lang.json"
import Head from "next/head";

const BerandaHeroSection = () => {
    const { data: session } = useSession()

    const fetcherPreferences = key => session.preference?.[key]
    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: activeRole } = useSWRImmutable('active_role', fetcherPreferences)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en

    const fetcherApp = async () => await axios.get('/api/app/app-setting').then(res => { return res.data.app_setting })
    const { data: appSettings } = useSWRImmutable('app_setting', fetcherApp)

    return (
        <>
            <Head>
                <title>{langData?.home} • myITS Base NextJS</title>
            </Head>
            <div className="col-12 mg-b-20">
                <div className="card bd-0 hero-bg" style={{ background: `linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${((appSettings?.main_cover?.is_default != 1 && appSettings?.main_cover?.picture) ? appSettings?.main_cover?.picture : "/images/background-cover.svg")})` }}>
                    <div className="card-body d-flex align-items-start flex-column ht-250 ht-md-350 pd-25 pd-md-40">
                        <div>
                            <div className="avatar avatar-md mg-b-10">
                                <img src={session.profile.picture ? session.profile.picture : "/images/profile-default.png"} className="rounded-circle" alt="" />
                            </div>
                            <p className="tx-poppins tx-medium tx-white tx-20 tx-md-24 mg-b-0">{langData?.greeting}, {session.profile.nickname || session.profile.name}</p>
                            <p className="tx-white">{activeRole}</p>
                        </div>
                        <div className="mg-t-auto">
                            <Link href="/akun">
                                <a>
                                    <p className="tx-poppins tx-medium tx-white mg-b-0 d-flex align-items-center">{langData?.account_setting} <ArrowRight className="mg-l-5 tx-18 mg-b-2" /></p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BerandaHeroSection;