class Preloader {
    render() {
        const html =
            `
            <div class='preloaderElement'></div>
            <div class='preloaderElement'></div>
            <div class='preloaderElement'></div>
            `
        ROOT_PRELOADER.innerHTML = html;
    }
}

const preloaderElement = new Preloader();
preloaderElement.render();
window.onload = function() {
    ROOT_PRELOADER.classList.add('hide-preloader');
    setInterval(function() {
        ROOT_PRELOADER.classList.add('preloader-hidden');
    }, 990);
}


