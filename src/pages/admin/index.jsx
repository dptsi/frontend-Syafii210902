import axios from "axios";
import { getToken } from "next-auth/jwt";
import AdminSection from "../../containers/admin/AdminSection";
import LayoutBeranda from "../../containers/beranda/LayoutBeranda";
import AuthSSO from "../auth-sso";

export async function getServerSideProps({ req, res }) {

    const token = await getToken({ req })
    if (token?.accessToken) {
        const role = await axios.get(
            `${process.env.PROVIDER_DOMAIN}/userinfo`,
            {
                headers: { 'Authorization': `Bearer ${await token.accessToken}` }
            }
        ).then(res => {
            let result = res.data.role.map(({ role_name }) => role_name)
            result.push("Super Administrator")
            return result
        })

        try {
            let required = "Super Administrator"

            if (!role.includes(required)) {
                return {
                    notFound: true
                }
            } else {
                return {
                    props: { authorized: true }
                }
            }
        } catch (error) {
            return {
                notFound: true
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}

export default function Admin() {

    return (
        <>
            <AuthSSO>
                <LayoutBeranda>
                    <div className="content pd-0 position-relative">
                        <div className="content-body mg-t-60">
                            <div className="container pd-x-0" id="content">
                                <AdminSection />
                            </div>
                        </div>
                    </div>
                </LayoutBeranda>
            </AuthSSO>
        </>
    )
}
