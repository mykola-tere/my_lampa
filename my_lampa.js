(function () {
    'use strict';

    function loadScript(url, name) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = function() {
            console.log('Plugin loaded:', name);
        };
        script.onerror = function() {
            console.log('Failed to load:', name);
            // Не показуємо помилку користувачу, щоб не дратувати, просто пишемо в консоль
        };
        document.head.appendChild(script);
    }

    // 1. Online Mod (Головний для українського контенту: Rezka, Eneyida, UAKino)
    // Це найстабільніша версія через HTTPS
    loadScript('https://nb557.github.io/plugins/online_mod.js', 'OnlineMod');

    // 2. MODS (Інтерфейс та торренти)
    // Використовуємо дзеркало, яке рідше блокується
    loadScript('https://modss.tv/modss.js', 'MODS');

    // 3. TMDB Proxy (Картинки)
    // Використовуємо HTTPS дзеркало замість cub.red (який http)
    loadScript('https://plugin.rootu.top/tmdb.js', 'TMDB');

    // 4. Аудіо доріжки (Для торрентів, щоб писало Ukr)
    // На жаль, tracks часто тільки http, тому пробуємо завантажити, але якщо не вийде - не страшно
    loadScript('http://cub.red/plugin/tracks.js', 'Tracks');

    console.log('My Custom Lampa Pack initialized');
})();
