document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE NAVIGATION
    ====================================== */

    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");

    if (menuToggle && siteNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = siteNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        // Close menu after clicking a link

        const navLinks = siteNav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                siteNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================
       ACTIVE PAGE
    ====================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "")
            .toLowerCase();

    const navLinks =
        document.querySelectorAll(".site-nav a");

    navLinks.forEach((link) => {

        const page =
            link.dataset.page?.toLowerCase();

        if (page === currentPage) {
            link.classList.add("active");
        }

    });


    /* =====================================
       FADE-UP OBSERVER
    ====================================== */

    const animatedElements =
        document.querySelectorAll(".fade-up");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        animatedElements.forEach((element) => {
            observer.observe(element);
        });

    }

});