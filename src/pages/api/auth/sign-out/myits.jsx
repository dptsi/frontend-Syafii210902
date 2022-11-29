import { getToken } from "next-auth/jwt"

export default async function FederatedLogout(req, res) {
    try {
        const token = await getToken({ req })
        if (!token || !token.idToken) {
            res.status(400).json({ url: "/" });
        }
        const endsessionURL = `${process.env.PROVIDER_DOMAIN}/signout`
        const endsessionParams = new URLSearchParams({
            id_token_hint: token.idToken,
            post_logout_redirect_uri: process.env.POST_LOGOUT_REDIRECT_URI,
        })

        res.status(200).json({ url: `${endsessionURL}?${endsessionParams}` });
    } catch (error) {
        res.status(400).json({ url: "/" });
    }
}