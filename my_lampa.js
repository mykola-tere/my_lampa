(function () {
    'use strict';

    function loadScript(url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        // Додаємо обробку помилок
        script.onerror = function() {
            console.log('Помилка завантаження плагіна:', url);
            Lampa.Noty.show('Не вдалося завантажити: ' + url);
        };
        document.head.appendChild(script);
    }

    // 1. Завантажуємо MODS (як основу для пошуку і інтерфейсу)
    // Використовуємо надійне дзеркало
    loadScript('https://modss.tv/modss.js');

    // 2. Завантажуємо Online Mod (Саме він дає доступ до Eneyida, UAKino, Filmix)
    // Це "розблоковує" українські джерела, яких немає в чистому MODS
    setTimeout(function(){
        loadScript('https://nb557.github.io/plugins/online_mod.js');
    }, 500); // Невелика затримка, щоб не було конфліктів при старті

    // 3. (Опціонально) Фікс для постерів в Україні
    loadScript('http://cub.red/plugin/tmdb-proxy');

    console.log('My Custom Lampa Pack loaded');
})();
