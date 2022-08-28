import Head from "next/head";

const BerandaMeta = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                ></meta>
                <meta name="description" content="NextJS Local"></meta>
                <meta name="author" content="DPTSI"></meta>

                <link rel="icon" href="/images/favicon.png" />

                <script src="/scripts/jquery/jquery.min.js"></script>
                <script src="/scripts/jqueryui/jquery-ui.min.js"></script>
				<script src="/scripts/bootstrap/bootstrap.bundle.min.js"></script>
            </Head>
        </>
    );
};

export default BerandaMeta;
