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

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return (
		<>
			<SessionProvider session={session}>
				<TopProgressBar />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	)
}

export default MyApp