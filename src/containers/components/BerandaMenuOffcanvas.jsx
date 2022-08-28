import { useSession } from "next-auth/react";
import Link from "next/link";
import { X } from "react-feather";

const BerandaMenuOffcanvas = () => {
    const { data: session } = useSession()

    return (
        <>
            <div id="menu-sidebar" className="offcanvas offcanvas-start offcanvas-overlay wd-300 wd-md-400 shadow">
                <div className="offcanvas-header bd-b-0">
                    <Link href="/">
                        <a className="aside-logo d-flex justify-content-center align-items-center">
                            <img src="/images/logo-myits-blue.svg" className="ht-20 ht-md-25 mg-t-3 mg-md-t-5" />
                            <p className="tx-poppins tx-medium tx-18 tx-md-22 tx-color-02 tx-spacing-2 mg-b-0 mg-l-10">NextJS Local</p>
                        </a>
                    </Link>
                    <a className="close" data-dismiss="offcanvas" role="button">
                        <X />
                    </a>
                </div>
                <div className="offcanvas-body pd-t-5 pd-md-t-10">
                    <ul className="sidebar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link-its d-flex justify-content-start align-items-center">
                                    <img src="/images/home.svg" className="wd-20 mg-r-15" />
                                    <span className="tx-poppins tx-medium text-truncate">Beranda</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BerandaMenuOffcanvas;