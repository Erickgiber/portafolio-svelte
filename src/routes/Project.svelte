<script lang="ts">
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { Link, useRouter } from 'svelte-routing'
  import { projects } from '../lib/shared/info/projects'
  import type { TypeProject } from '../lib/shared/types/Projects/project.types'
  import { Player } from '../lib/shared/utils/audio'

  let loading = true
  let project: TypeProject
  let modalNew = false
  const router = useRouter()

  const loadProject = () => {
    // @ts-ignore
    router.activeRoute.subscribe((val) => {
      const index = val.params.id
      project = projects[Number(index) - 1]
    })
  }

  onMount(() => {
    setTimeout(() => {
      loading = false
    }, 1)
    loadProject()

    const isNew = localStorage.getItem('new')

    if (!isNew) {
      Player.play()
      localStorage.setItem('new', 'false')
      modalNew = true
      setTimeout(() => {
        modalNew = false
      }, 8000)
    }
  })
</script>

<svelte:head>
  <meta name="title" content="Erick Ramirez - Website" />
  <meta
    name="description"
    content="Welcome to my beautiful website, I hope you like it and have a good time."
  />
  <meta
    name="keywords"
    content="portafolios, portafolio, website, erickgiber, erick, erick ramirez, venezuela, carupano, sucre, developer, programmer, programador, desarrollador"
  />
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="1 days" />
  <meta name="author" content="Erick Ramirez" />

  <title>{project ? project.title : 'Project'} | Erick Ramírez</title>
</svelte:head>

<section id="container">
  <div class="go-back-container">
    <Link class="go_back" to="/projects">
      <Icon icon="lets-icons:back" />
      <span>Back</span>
    </Link>
  </div>

  {#if project}
    <article class:animated={!loading} class="content">
      <h1 class="title">{projects.indexOf(project) + 1}. {project.title}</h1>
      <img class="img" src={project.img} alt={project.title} />
      <h2 class="subtitle">Description:</h2>

      <p class="description">{project.description}</p>
      <a target="_blank" class="go-to" href={project.href}>Go to demo!</a>

      <a target="_blank" class="pp-gift" href="https://paypal.me/erickgiber">
        <Icon icon="logos:paypal" />
        Gift me a coffee
      </a>
    </article>
  {/if}
</section>

{#if modalNew}
  <article id="modal-new">
    <h1>Hey! Listen!!</h1>
    <p>If you like my project, give me a coffee, I will thank you very much!</p>
  </article>
{/if}

<style lang="scss">
  #modal-new {
    position: fixed;
    bottom: 15px;
    left: 15px;
    width: 250px;
    height: auto;
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;

    h1 {
      color: #202020;
      font-size: 20px;
    }

    p {
      margin-top: 5px;
      font-size: 17px;
      color: #505050;
      font-weight: bold;
    }
  }

  #container {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    @media (width < 600px) {
      padding: 10px;
      gap: 30px;
    }

    .go-back-container {
      width: 100%;
    }

    .content {
      opacity: 0;
      scale: 0.99;
      transition: 0.4s;

      &.animated {
        scale: 1;
        opacity: 1;
      }

      .img {
        width: 100%;
        max-width: 700px;
        height: auto;
        border-radius: 10px;
      }

      .title {
        font-size: 25px;
        border-bottom: 1px solid #ffffff2d;
        margin-bottom: 10px;

        @media (width < 600px) {
          font-size: 22px;
        }
      }

      .subtitle {
        padding: 10px 0 5px 0;
        font-size: 25px;

        @media (width < 600px) {
          font-size: 20px;
        }
      }

      .description {
        background-color: #ffffff2d;
        padding: 10px;
        border-radius: 5px;
        font-size: 19px;
        margin-bottom: 30px;

        @media (width < 600px) {
          margin-bottom: 20px;
          font-size: 17px;
        }
      }

      a {
        transition: 0.2s;
      }

      a:hover {
        filter: brightness(0.9);
      }

      .go-to {
        background-color: var(--main-color);
        color: inherit;
        padding: 8px 13px;
        font-size: 17px;
        text-decoration: none;
        margin: 0 auto;
        border-radius: 5px;
        transition: 0.2s;

        @media (width < 600px) {
          display: block;
          margin-bottom: 10px;
          margin-top: 0;
        }
      }

      .pp-gift {
        float: right;
        background-color: white;
        color: rgb(78, 78, 255);
        font-weight: bold;
        padding: 8px 15px;
        text-decoration: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 5px;

        @media (width < 600px) {
          float: none;
          display: block;
        }
      }
    }
  }

  :global(.go_back) {
    text-decoration: none;
    color: #000;
    background-color: white;
    width: max-content;
    padding: 0 10px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;

    @media (width < 600px) {
      font-size: 15px;
    }

    &:hover {
      scale: 0.97;
      filter: brightness(0.9);
    }
  }
</style>
