const header = document.querySelector('header');

Promise.all([
    fetch('/module/header.html').then(res => res.text()),
]).then(([headerData,]) => {
    header.innerHTML = headerData;
});