import { useSession } from "next-auth/react";
import Head from "next/head";
import LayoutSSO from '../containers/sso/LayoutSSO';
import LandingSection from '../containers/landing/LandingSection';
import SSOMeta from "../containers/components/SSOMeta";
import SSOLoading from "../containers/components/SSOLoading";
import SSOUnauthenticated from "../containers/components/SSOUnauthenticated";

const AuthSSO = ({ children }) => {

    const { data: session, status } = useSession()
    if (status === "authenticated") {
        if (session.user.role.length > 0) {
            return (
                <>
                    {children}
                </>
            )
        } else {
            return (
                <>
                    <Head>
                        <title>NextJS Local</title>
                    </Head>
                    <SSOMeta />
                    <SSOUnauthenticated />
                </>
            )
        }
    } else if (status === "unauthenticated") {
        // signIn("myits")
        return (
            <>
                <Head>
                    <title>Sign In | NextJS Local</title>
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
                <title>NextJS Local</title>
            </Head>
            <SSOMeta />
            <SSOLoading />
        </>
    )
};

export default AuthSSO;
