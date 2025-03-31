function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function toggleFilter() {
    document.getElementById("filterMenu").classList.toggle("active");
}

// Fecha o menu se clicar fora dele
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector('.menu-icon');

    // Se o menu estiver aberto e o clique for fora da sidebar e do ícone
    if (sidebar.classList.contains('active') &&
        !sidebar.contains(event.target) &&
        !menuIcon.contains(event.target)) {
        sidebar.classList.remove('active');
    }

    // Fecha o filtro se clicar fora dele
    const filterMenu = document.getElementById("filterMenu");
    const filterBtn = document.querySelector('.filter-btn');

    if (filterMenu.classList.contains('active') &&
        !filterMenu.contains(event.target) &&
        !filterBtn.contains(event.target)) {
        filterMenu.classList.remove('active');
    }

      // Sessao do MAIS Generos aparece ao clicar
function toggleMoreGenres() {
    let moreGenres = document.getElementById("moreGenres");
    if (moreGenres.style.display === "none" || moreGenres.style.display === "") {
        moreGenres.style.display = "block";
    } else {
        moreGenres.style.display = "none";
    }
}
    
});
