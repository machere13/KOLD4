function progressBar() {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.getElementById('progressBar').style.height = scrolled + '%';
}

window.addEventListener('scroll', progressBar);