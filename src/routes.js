import Home from './components/Home.svelte'
import About from './components/About.svelte'
import Why from './components/Why.svelte'
import Projects from './components/Projects.svelte'

const routes = {
  '/': Home,
  '/about': About,
  '/why': Why,
  '/projects': Projects
}

export default routes
