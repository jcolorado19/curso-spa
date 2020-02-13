import Header from '../templates/Header'
import Home from '../page/Home'
import Character from '../page/Character'
import Error404 from '../page/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

// Se establecen las rutas que va a tener la aplicacion
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};


// Vamos a crear el manejador el cual se va a encargar de mostrar los elementos segun la logica obtenida
const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()

    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}

export default router