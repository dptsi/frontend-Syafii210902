import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import BerandaFooter from "../../containers/components/BerandaFooter";
import ErrorSection from "../../containers/components/ErrorSection";
import ScriptFooter from "../../containers/components/ScriptFooter";
import SSOMeta from "../../containers/components/SSOMeta";

export default function SignIn() {
    const reqUrl = useRouter()
    const { data: session, status } = useSession()

    if (status === "authenticated") {
        reqUrl.push("/")
    } else if (status === "unauthenticated") {
        if (!reqUrl.query.error) {
            signIn("myits")
        }
    }

    return (
        <>
            <Head>
                <title>Gagal Masuk • Base Next.JS</title>
            </Head>
            <SSOMeta />
            <ErrorSection>
                <div className="d-flex justify-content-center align-items-center mg-b-30">
                    <img src="/images/logo-myits-blue.svg" className="ht-30 mg-t-5" />
                    <p className="tx-poppins tx-medium tx-32 mg-b-0 mg-l-10">Base NextJS</p>
                </div>
                <div className="d-flex justify-content-center align-items-center mg-b-50">
                    <img src="/images/error/Error-502.png" className="wd-70p wd-md-50p wd-lg-30p" />
                </div>
                <p className="tx-poppins tx-medium tx-32 tx-md-36 tx-xl-40 mg-b-5 text-center">{reqUrl.query.error || "Error"}</p>
                <p className="mg-b-15 tx-16 tx-md-18 text-center">Ada kendala saat dilakukan Sign In. Silakan coba kembali.</p>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={() => signIn("myits", { callbackUrl: "/" })} className="btn btn-its-3 tx-poppins tx-medium">Masuk</button>
                </div>
            </ErrorSection>
            <BerandaFooter />
            <ScriptFooter />
        </>
    )
}