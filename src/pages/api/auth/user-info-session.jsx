import axios from "axios"

const userInfoSession = async (accessToken, userId) => {
    const userInfo = await axios.get(
        `${process.env.PROVIDER_DOMAIN}/userinfo`,
        {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        }
    ).then(
        res => res.data
    ).catch(
        () => null
    )

    const pictureEndpoint = (process.env.NEXT_PUBLIC_ITS_API || "https://api.its.ac.id:8443") + "/api/sso/get/picture?user_id=" + userId
    const picture = await axios.get(pictureEndpoint, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then(
        res => res.data.picture
    ).catch(
        () => null
    )

    let profile = {}

    profile.name = userInfo?.name
    profile.nickname = userInfo?.nickname
    profile.picture = picture ?? userInfo?.picture
    profile.preferred_username = userInfo?.preferred_username
    profile.group = userInfo?.group.map(({ group_name }) => group_name)
    profile.role = userInfo?.role

    return profile
}

export default userInfoSession