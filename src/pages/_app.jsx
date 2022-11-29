import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"

const TopProgressBar = dynamic(
	() => {
		return import("../containers/components/TopProgressBar");
	},
	{ ssr: false },
);

function MyApp({ Component, pageProps: { ...pageProps } }) {

	useEffect(() => {
		require("jquery/dist/jquery")
		require("jquery-ui/dist/jquery-ui")
		require("bootstrap/dist/js/bootstrap.bundle")
	}, [])

	return (
		<>
			<SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={false}>
				<TopProgressBar />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	)
}

export default MyApp