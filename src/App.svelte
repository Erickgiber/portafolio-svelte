<script lang="ts">
  import { Route, Router } from 'svelte-routing'
  import BackgroundAnimated from './lib/shared/ui/Background-Animated/BackgroundAnimated.svelte'
  import Navbar from './lib/shared/ui/Navbar/Navbar.svelte'
  import Contact from './routes/Contact.svelte'
  import Home from './routes/Home.svelte'
  import Project from './routes/Project.svelte'
  import Projects from './routes/Projects.svelte'
  import Skills from './routes/Skills.svelte'
</script>

<Router>
  <Navbar />
  <BackgroundAnimated />

  <main id="main">
    <Route path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/projects/:id" component={Project} />
    <Route path="/contact" component={Contact} />
    <Route path="/skills" component={Skills} />
    <Route path="*">
      <h1>This site not found</h1>
    </Route>
  </main>
</Router>

<style lang="scss">
  #main {
    padding: 20px;
    height: var(--main-height);
    overflow: auto;
  }
</style>
