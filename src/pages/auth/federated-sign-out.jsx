import axios from "axios"
import { signOut } from "next-auth/react"

const federatedSignOut = async () => {
    await axios.post('/api/auth/sign-out/myits')
        .then(res => {
            signOut({ callbackUrl: res.data.url ?? "/" })
        })
        .catch(err => {
            signOut({ callbackUrl: err.response.data.url ?? "/" })
        })
}

export default federatedSignOut