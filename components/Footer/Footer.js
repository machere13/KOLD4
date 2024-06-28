class Footer {
    render() {
        const html =
            `
            <div id='footerLogo'>
                <h2>KOLD</h2>
            </div>
            <nav id='footerNav'>
                <li class='footerNavElement'>Github</li>
                <li class='footerNavElement'>Telegram</li>
                <li class='footerNavElement'>Email</li>
            </nav>
            `
        ROOT_FOOTER.innerHTML = html;
    }

}

const footerElement = new Footer();
footerElement.render();