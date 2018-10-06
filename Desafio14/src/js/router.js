import crossroads from 'crossroads'

function router () {

    // En cada cambio del # va a verificar las rutas
    $(window).on('hashchange', function () {
        crossroads.parse(window.location.hash)
    })
    
    crossroads.parse(window.location.hash)

    crossroads.addRoute('#/home', function () {
        $('#root').load('./partials/home.html');
    });

    crossroads.addRoute('#/characters', function () {
        $('#root').load('./partials/characters.html');
    });

    crossroads.addRoute('#/contact', function () {
        $('#root').load('./partials/contact.html');
    });

    crossroads.addRoute('#/favorites', function () {
        $('#root').load('./partials/favorites.html');
    });
}

export default router