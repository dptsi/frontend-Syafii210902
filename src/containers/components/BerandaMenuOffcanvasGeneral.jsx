import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { X } from "react-feather";
import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"

const BerandaMenuOffcanvasGeneral = () => {
    const { data: session } = useSession()
    const pageActive = useRouter()

    const fetcherPreferences = key => session.preference?.[key]
    const fetcherLocal = key => localStorage?.getItem(key)
    const fetcherMyItsLogo = key => localStorage?.getItem('dark_mode_local') == "dark" ? "/images/logo-myits-white.svg" : "/images/logo-myits-blue.svg"
    const { data: activeRole } = useSWRImmutable('active_role', fetcherPreferences)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const { data: myItsLogo } = useSWRImmutable('myits_logo', fetcherMyItsLogo)
    const langData = AppText[langPrefLocal] ?? AppText.en

    return (
        <>
            <div id="menu-sidebar" className="offcanvas offcanvas-start wd-300 wd-md-400 shadow" data-bs-scroll="true">
                <div className="offcanvas-header bd-b-0 pd-x-25">
                    <Link href="/">
                        <a className="aside-logo d-flex justify-content-center align-items-center">
                            <img src={myItsLogo} className="ht-20 mg-t-3 mg-md-t-5" />
                            <p className="tx-poppins tx-medium tx-18 tx-md-22 tx-color-01 tx-spacing-2 mg-b-0 mg-l-10">Base NextJS</p>
                        </a>
                    </Link>
                    <a className="close" data-bs-dismiss="offcanvas" role="button">
                        <X />
                    </a>
                </div>
                <div className="offcanvas-body pd-t-5 pd-x-0">
                    <ul className="sidebar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={`nav-link-its d-flex justify-content-start align-items-center ${pageActive.route == "/" ? " active" : null}`}>
                                    <img src="/images/home.svg" className="wd-20 mg-r-15" />
                                    <span className="tx-poppins tx-medium text-truncate">{langData?.home}</span>
                                </a>
                            </Link>
                        </li>
                        {

                            (activeRole == "Super Administrator") ? <>
                                <li className="nav-item">
                                    <Link href="/admin">
                                        <a className={`nav-link-its d-flex justify-content-start align-items-center ${pageActive.route.startsWith("/admin") ? " active" : null}`}>
                                            <img src="/images/admin.svg" className="wd-20 mg-r-15" />
                                            <span className="tx-poppins tx-medium text-truncate">{langData?.admin}</span>
                                        </a>
                                    </Link>
                                </li>
                            </> : null
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BerandaMenuOffcanvasGeneral;