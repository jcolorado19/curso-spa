import Header from '../templates/Header'
import Home from '../page/Home'
import Character from '../page/Character'
import Error404 from '../page/Error404'
import getHast from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

// Se establecen las rutas que va a tener la aplicacion
const routes = {
    '/': Home,
    '/:id': Character,
    '/Contact': 'Contact',
}


// Vamos a crear el manejador el cual se va a encargar de mostrar los elementos segun la logica obtenida
const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()
}

export default router