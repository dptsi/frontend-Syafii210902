import { useSession } from "next-auth/react";
import Link from "next/link";

const BerandaMenu = () => {
    const { data: session } = useSession()

    return (
        <>
            <div className="pos-fixed l-20 t-80 d-none d-lg-block z-index-10">
                <ul className="list-group">
                    <li className="list-group-item-its">
                        <Link href="/">
                            <a className="btn btn-icon btn-its-list rounded-its-10">
                                <img src="/images/home.svg" className="wd-20" />
                                <span className="tx-poppins tx-medium mg-l-15 span-hide">Beranda</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BerandaMenu;