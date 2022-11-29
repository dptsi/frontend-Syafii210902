import NotifText from "../lang/notif.json";

export const notifikasiBerhasil = (result = "success", lang = "en") => {

    if (lang == null) lang = "en"
    
    let notifSuccess = NotifText.success[lang] ?? NotifText.success.en
    let now = new Date().valueOf()

    let svgCircle = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tx-success tx-20 mg-r-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
    let elemenNotifikasi = document.createElement('div')
    
    elemenNotifikasi.id = "notif-toast-" + now
    elemenNotifikasi.className += "toast mg-l-auto show"
    elemenNotifikasi.setAttribute("role", "alert")
    elemenNotifikasi.setAttribute("aria-live", "polite")
    elemenNotifikasi.setAttribute("aria-atomic", "true")
    elemenNotifikasi.setAttribute("data-bs-autohide", "true")
    elemenNotifikasi.setAttribute("data-bs-delay", "5000")
    elemenNotifikasi.innerHTML = (
        '<div class="toast-header">' +
            '<span class="mr-auto tx-poppins tx-medium tx-color-01">' + notifSuccess.notif + '</span>' +
            '<small class="text-muted">' + notifSuccess.now + '</small>' +
            '<button type="button" class="ml-2 mb-1 close" data-bs-dismiss="toast">&times;</button>' +
        '</div>' +
        '<div class="toast-body">' +
            svgCircle +
            '<p class="mg-b-0 mg-t-10">' + (notifSuccess[result] || notifSuccess.success)  + '</p>' +
        '</div>'
    )
    
    return elemenNotifikasi
}