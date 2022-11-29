import { useSession } from "next-auth/react";
import { X } from "react-feather";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { notifikasiBerhasil } from "../../helper/NotifikasiBerhasil";
import { notifikasiGagal } from "../../helper/NotifikasiGagal";
import { hideModal } from '../../helper/ModalHide';
import axios from "axios";
import { useSWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import AppText from "../../lang/lang.json"

const BerandaHeaderRole = () => {
    const { data: session } = useSession()
    const { mutate } = useSWRConfig()

    const fetcherPreferences = key => session.preference?.[key]
    const fetcherLocal = key => localStorage?.getItem(key)
    const { data: activeRole } = useSWRImmutable('active_role', fetcherPreferences)
    const { data: langPrefLocal } = useSWRImmutable('language_local', fetcherLocal ?? "en")
    const langData = AppText[langPrefLocal] ?? AppText.en

    const validationSchema = Yup.object().shape({
        editRole: Yup.string()
            .oneOf(session.profile?.role, langData?.role_choose),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const updateRole = async (data) => {

        const endpoint = '/api/akun/preference/role'
        document.getElementById("updateRoleBtn").disabled = true;
        let activeRole

        for (let i = 0; i < session.profile?.role?.length; i++) {
            if (session.profile?.role[i] == data.editRole) {
                activeRole = session.profile?.role[i]
                break
            }
        }

        if (activeRole != null) {
            let roleData = {
                role: activeRole
            }

            axios.post(endpoint, roleData).then(
                res => {
                    let result = res.data
                    session.preference.active_role = result.role
                    mutate('active_role')

                    let notifToast = document.getElementById('notif-toast')
                    let notifToastElement = notifikasiBerhasil(result.message, langPrefLocal)
                    notifToast.appendChild(notifToastElement)

                    const { Toast } = require("bootstrap/dist/js/bootstrap.bundle");
                    Toast.getOrCreateInstance("#" + notifToastElement.id).show()
                }
            ).catch(
                err => {
                    let error = err?.response?.data?.message
                    let reason = err?.response?.data?.reason

                    let notifToast = document.getElementById('notif-toast')
                    let notifToastElement = notifikasiGagal(error, reason, langPrefLocal)
                    notifToast.appendChild(notifToastElement)

                    const { Toast } = require("bootstrap/dist/js/bootstrap.bundle");
                    Toast.getOrCreateInstance("#" + notifToastElement.id).show()
                }
            )
        } else {

            let notifToast = document.getElementById('notif-toast')
            let notifToastElement = notifikasiGagal('role_denied', langPref)
            notifToast.appendChild(notifToastElement)

            const { Toast } = require("bootstrap/dist/js/bootstrap.bundle");
            Toast.getOrCreateInstance("#" + notifToastElement.id).show()
        }

        hideModal("#change-role-modal")

        document.updateRole.reset()
        document.getElementById("updateRoleBtn").disabled = false;

        return false
    }

    return (
        <>
            <div className="modal effect-scale" id="change-role-modal" role="dialog" aria-labelledby="change-role-modal" aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bd-0 d-flex align-items-center pd-b-0">
                            <h5 className="tx-poppins tx-medium mg-b-0">{langData?.role}</h5>
                            <button type="button" className="btn btn-icon btn-its-custom-1 tx-poppins tx-medium rounded-its-50p d-flex align-items-center pd-y-10" data-bs-dismiss="modal"><X className="tx-18" /></button>
                        </div>
                        <form onSubmit={handleSubmit(updateRole)} id="updateRole" name="updateRole" noValidate>
                            <div className="modal-body">
                                <p>{langData?.role_now} <b>{activeRole}</b>.</p>
                                <div className="form-group form-floating">
                                    <select {...register('editRole')} className={`form-control form-select ${errors.editRole ? 'is-invalid' : ''}`} id="editRole" name="editRole" required>
                                        <option defaultValue>{langData?.choose_one}</option>
                                        {
                                            (session.profile?.role && session.profile?.role?.length > 0) ? session.profile?.role.map(function (role) {
                                                return (
                                                    <option value={role} key={`role-${role}`}>{role}</option>
                                                )
                                            }) : null
                                        }
                                    </select>
                                    <label htmlFor="editRole">{langData?.role_list}</label>
                                    <div className="invalid-feedback">{errors.editRole?.message}</div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => reset()} type="button" className="btn btn-its-custom-1 tx-poppins tx-medium" data-bs-dismiss="modal">{langData?.cancel}</button>
                                <button className="btn btn-its-3 tx-poppins tx-medium" type="submit" id="updateRoleBtn">{langData?.change}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BerandaHeaderRole;
