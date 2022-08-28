export const notifikasiBerhasil = (result) => {

    let svgCircle = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tx-success tx-20 mg-r-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
    let elemenNotifikasi = document.createElement('div')
    
    elemenNotifikasi.className += "toast mg-l-auto show";
    elemenNotifikasi.innerHTML = (
        '<div class="toast-header">' +
            '<span class="mr-auto tx-poppins tx-medium tx-color-01">Notifikasi</span>' +
            '<small class="text-muted">Baru saja</small>' +
            '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>' +
        '</div>' +
        '<div class="toast-body">' +
            svgCircle +
            '<p class="tx-medium mg-b-0">Berhasil Diubah</p>' +
            '<p class="mg-b-0">' + result.message + '</p>' +
        '</div>'
    )
    
    return elemenNotifikasi
}