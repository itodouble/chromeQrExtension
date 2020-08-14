document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.getSelected(null, function (tab) {
        $("#tab_title").text(tab.title);
        $("#tab_url").val(tab.url);
        new QRCode(document.getElementById("tab_qrcode"), tab.url);
    });
});
