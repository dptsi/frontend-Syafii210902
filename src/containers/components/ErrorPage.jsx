import { useSession } from "next-auth/react";
import Link from "next/link";
import LayoutBeranda from "../beranda/LayoutBeranda";
import BerandaFooter from "./BerandaFooter";
import ErrorSection from "./ErrorSection";
import SSOMeta from "./SSOMeta";
import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"

const ErrorPage = ({ children, backBtn = true }) => {

    const { data: session, status } = useSession()

    // const fetcherPreferences = key => session.preference?.[key]
    const fetcherLocal = key => localStorage?.getItem(key)
    // const { data: langPref } = useSWRImmutable('language', fetcherPreferences)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en
    if (status === "authenticated") {
        return (
            <>
                <LayoutBeranda>
                    <ErrorSection>
                        {children}
                        {
                            backBtn == true ?
                                <>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Link href="/">
                                            <button className="btn btn-its-3 tx-poppins tx-medium">{langData?.back_home}</button>
                                        </Link>
                                    </div>
                                </> : null
                        }
                    </ErrorSection>
                </LayoutBeranda>
            </>
        )
    } else {
        return (
            <>
                <SSOMeta />
                <ErrorSection>
                    <div className="d-flex justify-content-center align-items-center mg-b-30">
                        <img src="/images/logo-myits-blue.svg" className="ht-30 mg-t-5" />
                        <p className="tx-poppins tx-medium tx-32 mg-b-0 mg-l-10">Base NextJS</p>
                    </div>
                    {children}
                    <div className="d-flex justify-content-center align-items-center">
                        <Link href="/">
                            <button className="btn btn-its-3 tx-poppins tx-medium">{langData?.landing}</button>
                        </Link>
                    </div>
                </ErrorSection>
                <BerandaFooter />
            </>
        )
    }
}

export default ErrorPage;