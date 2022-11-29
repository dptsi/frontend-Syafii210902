import { useSession } from "next-auth/react";
import Head from "next/head";
import useSWRImmutable from "swr/immutable";

const BerandaMeta = () => {

    const { data: session } = useSession()
    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: preferencesDarkModeLocal } = useSWRImmutable('dark_mode_local', fetcherLocal ?? "light")

    preferencesDarkModeLocal == "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light")
    session.preference?.language ? document.documentElement.setAttribute("lang", session.preference?.language) : document.documentElement.setAttribute("lang", "en")

    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <meta name="description" content="Base NextJS"></meta>
                <meta name="author" content="DPTSI"></meta>

                <link rel="icon" href="/images/favicon.png" />

                <script src="/scripts/jquery/jquery.min.js"></script>
                <script src="/scripts/jquery-cropper/jquery-cropper.js"></script>
                <script src="/scripts/cropperjs/cropper.js"></script>
            </Head>
        </>
    );
};

export default BerandaMeta;