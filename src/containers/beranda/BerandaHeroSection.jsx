import { useSession } from "next-auth/react";
import Link from "next/link"
import { ArrowRight } from "react-feather";

const BerandaHeroSection = () => {
    const { data: session } = useSession()

    return (
        <>
            <div className="col-12 mg-b-20 mg-sm-b-20 mg-lg-b-30">
                <div className="card bd-0 hero-bg">
                    <div className="card-body ht-350 pos-relative">
                        <div className="pd-10 pd-md-20">
                            <div className="avatar avatar-md mg-b-10">
                                <img src={session.user.picture ? session.user.picture : "/images/avatar.jpg"} className="rounded-circle" alt="" />
                            </div>
                            <p className="tx-poppins tx-medium tx-white tx-20 tx-md-24 mg-b-0">Selamat datang, {session.user.nickname ? session.user.nickname : session.user.name}</p>
                            <p className="tx-white">{session.user.role[0]?.role_name} {session.user.role[0]?.org_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BerandaHeroSection;