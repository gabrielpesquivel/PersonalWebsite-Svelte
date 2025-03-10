import Home from './components/Home.svelte'
import About from './components/About.svelte'
import Projects from './components/Projects.svelte'
import Blog from './components/Blog.svelte'

const routes = {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/blog': Blog
}

export default routes
