let root = document.getElementById('browser-info')
let result = `You are using ${navigator.appCodeName} ${navigator.appVersion} ${navigator.cookieEnabled} ${navigator.platform} ${navigator.userAgent} ${navigator.appName}  `;
root.innerText = result;