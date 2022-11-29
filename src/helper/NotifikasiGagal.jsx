import NotifText from "../lang/notif.json";

export const notifikasiGagal = (error = "error", reason = null, lang = "en") => {
    
    if (lang == null) lang = "en"

    let notifError = NotifText.error[lang] ?? NotifText.error.en
    let notifReason = NotifText.reason[lang] ?? NotifText.reason.en
    let now = new Date().valueOf()

    let svgTriangle = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tx-danger tx-20 mg-r-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
    let elemenNotifikasi = document.createElement('div')
    let errorMessage = (notifError[error] || notifError.error)

    if (reason != null && notifReason[reason] != null) {
        errorMessage = errorMessage + '. ' + notifReason[reason] + '.'
    }
    
    elemenNotifikasi.id = "notif-toast-" + now
    elemenNotifikasi.className += "toast mg-l-auto show"
    elemenNotifikasi.setAttribute("role", "alert")
    elemenNotifikasi.setAttribute("aria-live", "polite")
    elemenNotifikasi.setAttribute("aria-atomic", "true")
    elemenNotifikasi.setAttribute("data-bs-autohide", "true")
    elemenNotifikasi.setAttribute("data-bs-delay", "5000")
    elemenNotifikasi.innerHTML = (
        '<div class="toast-header">' +
            '<span class="mr-auto tx-poppins tx-medium tx-color-01">' + notifError.notif + '</span>' +
            '<small class="text-muted">' + notifError.now + '</small>' +
            '<button type="button" class="ml-2 mb-1 close" data-bs-dismiss="toast">&times;</button>' +
        '</div>' +
        '<div class="toast-body">' +
            svgTriangle +
            '<p class="mg-b-0 mg-t-10">' + errorMessage + '</p>' +
        '</div>'
    )
    
    return elemenNotifikasi
}