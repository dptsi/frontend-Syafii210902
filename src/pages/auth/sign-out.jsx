import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import SSOMeta from "../../containers/components/SSOMeta";
import SSOSignOut from "../../containers/components/SSOSignOut";

export default function SignOut() {
    const reqUrl = useRouter()
    const { data: session, status } = useSession()

    if (status === "authenticated") {
        signOut({ callbackUrl: "/" });
    } else if (status === "unauthenticated") {
        reqUrl.push("/")
    }

    return (
        <>
            <Head>
                <title>Base Next.JS</title>
            </Head>
            <SSOMeta />
            <SSOSignOut />
        </>
    )
}