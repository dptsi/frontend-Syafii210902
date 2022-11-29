import NextAuth from "next-auth"
import userInfoSession from "./user-info-session"

export default NextAuth({
    providers: [
        {
            id: "myits",
            name: "myITS",
            type: "oauth",
            wellKnown: process.env.PROVIDER_CONFIGURATION,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorization: {
                params: {
                    scope: process.env.SCOPE,
                    redirect_uri: process.env.REDIRECT_URI
                }
            },
            idToken: true,
            issuer: process.env.PROVIDER_DOMAIN,
            profile(profile, account) {
                return {
                    id: profile.sub,
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
                    refreshToken: account.refresh_token,
                    idToken: account.id_token,
                    user
                }
            }

            return token
        },
        async session({ session, token }) {
            // Get User Info from OIDC Provider
            let profile = await userInfoSession(token.accessToken, token.user.id)
            let preference = {}

            // ----- Init Default Role ----- //
            // If have role from SECMAN
            if (profile?.role?.length > 0) {
                // Get default role from SECMAN
                for (let i = 0; i < profile.role.length; i++) {
                    if (profile.role[i].is_default == 1) {
                        preference.active_role = profile.role[i].role_name
                        break
                    }
                }

                // If doesn't have default role in SECMAN
                if (preference.active_role == null) {
                    preference.active_role = profile.role[0].role_name
                }

                profile.role = profile.role.map(({ role_name }) => role_name)
            }

            delete session.user
            delete session.expires

            if (Object.keys(profile).length > 0) {
                session.profile = profile
                session.preference = preference

                return session
            } else {
                return {}
            }
        }
    },
    session: {
        jwt: true,
        maxAge: 30 * 60,
    },
    pages: {
        signIn: '/auth/sign-in',
        signOut: '/auth/sign-out',
        error: '/auth/error',
    },
    debug: false
})