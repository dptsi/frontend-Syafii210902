import { useSession } from "next-auth/react";
import { X } from "react-feather";

const BerandaHeaderRole = () => {
    const { data: session } = useSession()

    return (
        <>
            <div className="modal effect-scale" id="change-role-user" role="dialog" aria-labelledby="chgRoleUserLabel" aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bd-0 d-flex align-items-center pd-b-0">
                            <h5 className="tx-poppins tx-medium mg-b-0">Hak Akses</h5>
                            <button type="button" className="btn btn-icon btn-its-custom-1 tx-poppins tx-medium rounded-its-50p d-flex align-items-center" data-dismiss="modal"><X className="mg-y-2 tx-18" /></button>
                        </div>
                        <div className="modal-body">
                            <p>Saat ini Anda berperan sebagai <b>{session.user.role[0]?.role_name} {session.user.role[0]?.org_name}</b>.</p>
                            <div className="form-group form-floating">
                                <select className="form-select" id="select_user" required>
                                    <option>Pilih salah satu</option>
                                    {
                                        (session.user.role && session.user.role.length > 0) ? session.user.role.map(function (role, index) {
                                            return (
                                                <option defaultValue={role.role_id}>{role.role_name} {role.org_name}</option>
                                            )
                                        }) : ""
                                    }
                                </select>
                                <label htmlFor="select_user">Hak Akses Anda</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-its-custom-1 tx-poppins tx-medium" data-dismiss="modal">Batal</button>
                            <input className="btn btn-its-3 tx-poppins tx-medium" type="button" id="goBtn" defaultValue="Ganti" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BerandaHeaderRole;
