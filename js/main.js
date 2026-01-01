function initHeaderScroll() {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("compact");
        } else {
            header.classList.remove("compact");
        }
    });
}

/* Run AFTER header is loaded */
document.addEventListener("DOMContentLoaded", () => {
    // wait a bit in case header is injected via fetch
    setTimeout(initHeaderScroll, 10);
});