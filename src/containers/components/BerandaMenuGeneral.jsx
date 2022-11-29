import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"

const BerandaMenuGeneral = () => {
    const { data: session } = useSession()
    const pageActive = useRouter()

    const fetcherPreferences = key => session.preference?.[key]
    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: activeRole } = useSWRImmutable('active_role', fetcherPreferences)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en

    return (
        <>
            <div className="pos-fixed l-20 t-80 d-none d-xl-block z-index-10">
                <ul className="list-group">
                    <li className="list-group-item-its">
                        <Link href="/">
                            <a className={`btn btn-icon btn-its-list rounded-its-10 ${pageActive.route == "/" ? " active" : null}`}>
                                <img src="/images/home.svg" className="wd-20" />
                                <span className="tx-poppins tx-medium mg-l-15 span-hide">{langData?.home}</span>
                            </a>
                        </Link>
                    </li>
                    {

                        (activeRole == "Super Administrator") ? <>
                            <li className="list-group-item-its">
                                <Link href="/admin">
                                    <a className={`btn btn-icon btn-its-list rounded-its-10 ${pageActive.route.startsWith("/admin") ? " active" : null}`}>
                                        <img src="/images/admin.svg" className="wd-20" />
                                        <span className="tx-poppins tx-medium mg-l-15 span-hide">{langData?.admin}</span>
                                    </a>
                                </Link>
                            </li>
                        </> : null
                    }
                </ul>
            </div>
        </>
    );
};

export default BerandaMenuGeneral;