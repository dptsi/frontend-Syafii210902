import { useSession } from "next-auth/react";
import Head from "next/head";
import LayoutSSO from '../containers/sso/LayoutSSO';
import LandingSection from '../containers/landing/LandingSection';
import SSOMeta from "../containers/components/SSOMeta";
import SSOLoading from "../containers/components/SSOLoading";
import { useRouter } from "next/router";
import LayoutBeranda from "../containers/beranda/LayoutBeranda";
import AccessDenied from "../containers/components/AccessDenied";
import useSWRImmutable from "swr/immutable";
import SSOUnauthorized from "../containers/components/SSOUnauthorized";
import ErrorPage from "../containers/components/ErrorPage";

const AuthSSO = ({ children }) => {

    const { data: session, status } = useSession()
    const router = useRouter()
    const authorized = ["Everyone"]

    const fetcherPreferences = key => session.preference?.[key]
    const { data: activeRole } = useSWRImmutable('active_role', fetcherPreferences)

    if (status === "authenticated") {
        if (session.profile?.group?.length > 0 && session.profile?.group?.some(item => authorized.includes(item))) {
            if (router.pathname.startsWith("/admin") && !(
                session.preference?.active_role == "Super Administrator"
            ) && !(
                activeRole == "Super Administrator"
            )) {
                return (
                    <>
                        <Head>
                            <title>Halaman tidak ditemukan • Base Next.JS</title>
                        </Head>
                        <LayoutBeranda>
                            <AccessDenied />
                        </LayoutBeranda>
                    </>
                )
            } else {
                return (
                    <>
                        {children}
                    </>
                )
            }
        } else {
            return (
                <>
                    <Head>
                        <title>Hak Akses diperlukan • Base Next.JS</title>
                    </Head>
                    <ErrorPage backBtn={false}>
                        <SSOUnauthorized />
                    </ErrorPage>
                </>
            )
        }
    } else if (status === "unauthenticated") {
        // signIn("myits")

        return (
            <>
                <Head>
                    <title>Base Next.JS</title>
                </Head>
                <LayoutSSO>
                    <LandingSection />
                </LayoutSSO>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Base Next.JS</title>
            </Head>
            <SSOMeta />
            <SSOLoading />
        </>
    )
};

export default AuthSSO;
