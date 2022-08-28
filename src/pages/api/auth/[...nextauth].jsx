import axios from "axios"
import NextAuth from "next-auth"

export default NextAuth({
    providers: [
        {
            id: "myits",
            name: "myITS",
            type: "oauth",
            wellKnown: `${process.env.PROVIDER_DOMAIN}/.well-known/openid-configuration`,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.SECRET,
            authorization: {
                params: {
                    scope: "openid integra profile email phone group role resource",
                    redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/myits`
                }
            },
            idToken: true,
            issuer: process.env.PROVIDER_DOMAIN,
            profile(profile, account) {
                return {
                    id: profile.sub,
                    idToken: account.id_token
                }
            },
        }
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            else return url
        },
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    accessToken: account.access_token,
                    accessTokenExpires: Date.now() + account.expires_in * 1000,
                    refreshToken: account.refresh_token,
                    idToken: account.id_token,
                    user
                }
            }

            return token
        },
        async session({ session, token }) {
            const userInfo = await axios.get(
                `${process.env.PROVIDER_DOMAIN}/userinfo`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
                        'Access-Control-Allow-Credentials': true,
                        'Authorization': `Bearer ${token.accessToken}`,
                    }
                }
            )

            token.user.name = userInfo.data.name
            token.user.nickname = userInfo.data.nickname
            token.user.email = userInfo.data.email
            token.user.picture = userInfo.data.picture
            token.user.gender = userInfo.data.gender
            token.user.birthdate = userInfo.data.birthdate
            token.user.preferred_username = userInfo.data.preferred_username
            token.user.email = userInfo.data.email
            token.user.email_verivied = userInfo.data.email_verified
            token.user.alternate_email = userInfo.data.alternate_email
            token.user.alternate_email_verified = userInfo.data.alternate_email_verified
            token.user.phone = userInfo.data.phone
            token.user.phone_verified = userInfo.data.phone_verified
            token.user.role = userInfo.data.role

            session.user = token.user
            session.idToken = token.idToken
            session.error = token.error

            return session
        }
    },
    session: {
        maxAge: 30 * 60,
    },
    debug: true
})