/* =========================
   STREAM MORA
   JAVASCRIPT
========================= */


/* ================= SEARCH ================= */

function openSearch() {

    const panel =
        document.getElementById("searchPanel");

    panel.classList.add("active");

    document
        .getElementById("searchInput")
        .focus();
}


function closeSearch() {

    document
        .getElementById("searchPanel")
        .classList.remove("active");

}


/* ================= MOVIE SEARCH ================= */

function searchMovies() {

    const text =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const movies =
        document.querySelectorAll(".movie-card");

    movies.forEach(movie => {

        const title =
            (movie.dataset.title || "")
            .toLowerCase();

        if (title.includes(text)) {

            movie.style.display = "";

        } else {

            movie.style.display = "none";

        }

    });
}


/* ================= MOVIE DETAILS ================= */

function showDetails(
    title,
    year,
    duration,
    description
) {

    document
        .getElementById("modalTitle")
        .textContent = title;

    document
        .getElementById("modalYear")
        .textContent = year;

    document
        .getElementById("modalDuration")
        .textContent = duration;

    document
        .getElementById("modalDescription")
        .textContent = description;

    document
        .getElementById("movieModal")
        .classList.add("active");
}


/* ================= CLOSE MODAL ================= */

function closeModal() {

    document
        .getElementById("movieModal")
        .classList.remove("active");

}


/* ================= PLAY ================= */

function playMovie() {

    alert(
        "▶ Stream Mora Player\n\n" +
        "The video player will start here.\n\n" +
        "You can connect this button to your own video files or streaming backend."
    );

}


/* ================= SEE ALL ================= */

function showAll(sectionName) {

    alert(
        sectionName +
        "\n\nMore content can be loaded here from your movie database."
    );

}


/* ================= SCROLL ================= */

function scrollToMovies() {

    document
        .getElementById("movies")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= IMAGE FALLBACK ================= */

function imageFallback(image) {

    image.style.display = "none";

    image.parentElement.classList.add("image-fallback");

}


/* ================= CLOSE MODAL ================= */

document
    .getElementById("movieModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

        closeSearch();

    }

});






