import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { LogOut, Menu, Settings, Users } from "react-feather"
import BerandaHeaderRole from "./BerandaHeaderRole"

const BerandaHeader = () => {
    const { data: session } = useSession()

    return (
        <>
            <header className="navbar navbar-header navbar-header-fixed pos-fixed z-index-10 wd-100p t-0 blur-transparent d-flex justify-content-between">
                <div className="d-flex align-items-center mg-l-10 mg-lg-l-20">
                    <a className="btn btn-icon btn-its-custom-1 off-canvas-menu rounded-its-50p d-flex align-items-center" data-bs-toggle="offcanvas" href="#menu-sidebar" aria-controls="menu-sidebar">
                        <Menu />
                    </a>
                    <Link href="/">
                        <a className="d-flex justify-content-center align-items-center mg-l-5 mg-lg-l-15">
                            <img src="/images/logo-myits-blue.svg" className="ht-20 ht-md-25 mg-t-3 mg-md-t-5" />
                            <p className="tx-poppins tx-medium tx-18 tx-md-22 tx-color-02 tx-spacing-2 mg-b-0 mg-l-10">NextJS Local</p>
                        </a>
                    </Link>
                </div>
                <div className="d-flex align-items-center mg-r-10 mg-lg-r-20">
                    <div className="dropdown dropdown-akun">
                        <a className="dropdown-link" data-toggle="dropdown" data-display="static">
                            <div className="avatar avatar-sm"><img src={session.user.picture ? session.user.picture : "/images/avatar.jpg"} className="rounded-circle" alt="" /></div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right allow-focus shadow rounded-its-10">
                            <a className="dropdown-item-its tx-poppins tx-medium bd-b menu-profil">
                                <div className="avatar avatar-md mg-r-15">
                                    <img src={session.user.picture ? session.user.picture : "/images/avatar.jpg"} className="rounded-circle" alt="" />
                                </div>
                                <div className="media-body">
                                    <p className="tx-15 tx-poppins tx-semibold mg-b-0 crop-text-1">{session.user.name}</p>
                                    <p className="tx-13 tx-normal tx-color-03 mg-b-0 crop-text-1">{session.user.preferred_username}</p>
                                </div>
                            </a>
                            <a onClick={() => $('#change-role-user').modal('show')} className="dropdown-item-its tx-poppins tx-medium" data-toggle="modal" data-animation="effect-scale">
                                <div className="mg-r-10 d-flex align-items-center justify-content-center">
                                    <Users className="tx-22" />
                                </div>
                                Ganti peran
                            </a>
                            <a onClick={() => signOut({})} className="dropdown-item-its tx-poppins tx-medium">
                                <div className="mg-r-10 d-flex align-items-center justify-content-center">
                                    <LogOut className="tx-22" />
                                </div>
                                Keluar
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <BerandaHeaderRole />
        </>
    );
};

export default BerandaHeader;
