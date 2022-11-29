import { useSession } from "next-auth/react";
import Link from "next/link"
import { LogOut, Menu, Settings, Users } from "react-feather"
import BerandaHeaderRole from "./BerandaHeaderRole"
import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"
import { notifikasiBerhasil } from "../../helper/NotifikasiBerhasil";
import { notifikasiGagal } from "../../helper/NotifikasiGagal";
import { useSWRConfig } from "swr";
import federatedSignOut from "../../pages/auth/federated-sign-out";


const BerandaHeader = () => {
    const { data: session } = useSession()
    const { mutate } = useSWRConfig()

    const fetcherLocal = key => localStorage?.getItem(key)
    const fetcherMyItsLogo = key => localStorage?.getItem('dark_mode_local') == "dark" ? "/images/logo-myits-white.svg" : "/images/logo-myits-blue.svg"
    const { data: preferencesLanguageLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const { data: myItsLogo } = useSWRImmutable('myits_logo', fetcherMyItsLogo)
    const langData = AppText[preferencesLanguageLocal] ?? AppText["en"]

    const updateLanguageLocal = async (data, langPrefLocal) => {
        if (langPrefLocal != data) {
            try {
                localStorage.setItem('language_local', data)
                mutate('language_local')

                let notifToast = document.getElementById('notif-toast')
                let notifToastElement = notifikasiBerhasil("language_update", data)
                notifToast.appendChild(notifToastElement)

                const { Toast } = require("bootstrap/dist/js/bootstrap.bundle");
                Toast.getOrCreateInstance("#" + notifToastElement.id).show()
            } catch (err) {
                let reason = err?.response?.data?.reason
                let notifToast = document.getElementById('notif-toast')
                let notifToastElement = notifikasiGagal("language_update", reason, langPrefLocal)
                notifToast.appendChild(notifToastElement)

                const { Toast } = require("bootstrap/dist/js/bootstrap.bundle");
                Toast.getOrCreateInstance("#" + notifToastElement.id).show()
            }
        }
    }

    return (
        <>
            <header className="navbar navbar-header navbar-header-fixed pos-fixed z-index-10 wd-100p t-0 blur-transparent d-flex justify-content-between">
                <div className="d-flex align-items-center mg-l-10 mg-lg-l-20">
                    <a className="btn btn-icon btn-its-custom-1 off-canvas-menu rounded-its-50p d-flex align-items-center pd-y-10" data-bs-toggle="offcanvas" href="#menu-sidebar" aria-controls="menu-sidebar">
                        <Menu />
                    </a>
                    <Link href="/">
                        <a className="d-flex justify-content-center align-items-center mg-l-5 mg-lg-l-15">
                            <img src={myItsLogo} className="ht-20 mg-t-3 mg-md-t-5" />
                            <p className="tx-poppins tx-medium tx-18 tx-md-22 tx-color-01 tx-spacing-2 mg-b-0 mg-l-10">Base NextJS</p>
                        </a>
                    </Link>
                </div>
                <div className="d-flex align-items-center mg-r-10 mg-lg-r-20">
                    <div className="dropdown mg-b-0 mg-l-15">
                        <a className="btn btn-its-custom-1 tx-uppercase dropdown-toggle" data-bs-toggle="dropdown">
                            {
                                preferencesLanguageLocal == "id" ? "ID" : "EN"
                            }
                        </a>
                        <div className="dropdown-menu dropdown-menu-right rounded-its-10">
                            <a className="dropdown-item" role="button" onClick={() => updateLanguageLocal("id", preferencesLanguageLocal ?? "en")}>ID - {langData?.language_id}</a>
                            <a className="dropdown-item" role="button" onClick={() => updateLanguageLocal("en", preferencesLanguageLocal ?? "en")}>EN - {langData?.language_en}</a>
                        </div>
                    </div>
                    <div className="dropdown dropdown-akun">
                        <a className="dropdown-link" data-bs-toggle="dropdown">
                            <div className="avatar avatar-sm"><img src={session.profile.picture ? session.profile.picture : "/images/profile-default.png"} className="rounded-circle" alt="" /></div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right allow-focus shadow rounded-its-10">
                            <Link href="/akun">
                                <a className="dropdown-item-its tx-poppins tx-medium bd-b menu-profil">
                                    <div className="avatar avatar-md mg-r-15">
                                        <img src={session.profile.picture ? session.profile.picture : "/images/profile-default.png"} className="rounded-circle" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <p className="tx-15 tx-poppins tx-semibold mg-b-0 crop-text-1">{session.profile.name}</p>
                                        <p className="tx-13 tx-normal tx-color-03 mg-b-0 crop-text-1">{session.profile.preferred_username}</p>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/akun/personalisasi">
                                <a className="dropdown-item-its tx-poppins tx-medium">
                                    <div className="mg-r-0 d-flex align-items-center justify-content-center">
                                        <Settings className="tx-22" />
                                    </div>
                                    {langData?.web_setting}
                                </a>
                            </Link>
                            {
                                session?.profile?.role?.length > 1 ?
                                    <a className="dropdown-item-its tx-poppins tx-medium" data-bs-toggle="modal" data-bs-target="#change-role-modal" data-animation="effect-scale">
                                        <div className="mg-r-0 d-flex align-items-center justify-content-center">
                                            <Users className="tx-22" />
                                        </div>
                                        {langData?.change_role}
                                    </a> :
                                    null
                            }
                            <a onClick={() => federatedSignOut()} className="dropdown-item-its tx-poppins tx-medium">
                                <div className="mg-r-0 d-flex align-items-center justify-content-center">
                                    <LogOut className="tx-22" />
                                </div>
                                {langData?.sign_out}
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {
                session?.profile?.role?.length > 1 ?
                    <BerandaHeaderRole /> :
                    null
            }
        </>
    );
};

export default BerandaHeader;