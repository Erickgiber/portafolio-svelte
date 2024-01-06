<script lang="ts">
  import { onMount } from 'svelte'
  import { Link } from 'svelte-routing'
  import { projects } from '../lib/shared/info/projects'

  let loaded = false

  onMount(() => {
    setTimeout(() => {
      loaded = true
    }, 1)
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

  <title>Projects | Erick Ramírez</title>
</svelte:head>

<section id="container">
  <h1 class="title">Projects</h1>
  <br />
  <article id="grid-container">
    {#each projects as { title, img, tecnology }, index}
      <Link
        style="transition: 0.{index}s;"
        class="grid-item {!loaded ? 'animated' : ''}"
        to="/projects/{index + 1}"
      >
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <h2>{tecnology}</h2>
        <span>Click for more</span>
      </Link>
    {/each}
  </article>
</section>

<style lang="scss">
  #container {
    padding: 30px;

    @media (width < 600px) {
      padding: 10px;
    }

    .title {
      padding-bottom: 5px;
      border-bottom: 1px solid #ffffff2d;
    }

    #grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      gap: 50px;

      @media (width < 1446px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (width < 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (width < 720px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  :global(.grid-item) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    border-radius: 10px;
    position: relative;
    transition: 0.2s;
    height: 100%;
    min-height: 250px;

    @media (width > 1336px) {
      min-height: 280px;
    }

    @media (width < 1336px) {
      min-height: 250px;
    }

    @media (width < 600px) {
      min-height: 200px;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 13px;
      font-weight: bold;
      translate: -50% -50%;
      transition: 0.2s;
      text-align: center;
      text-shadow: 1px 1px 0 #000;
      opacity: 0;
      scale: 1;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: 2px solid #414141;
      filter: saturate(10%) brightness(0.4);
      background-color: #414141;
    }

    h1 {
      font-size: 18px;
      padding: 7px;
      background-color: #0000002a;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      border-radius: inherit;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      transition: 0.2s;
    }

    h2 {
      font-size: 18px;
      width: max-content;
      text-align: center;
      padding: 7px 50px;
      background-color: #414141;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: 0.2s;

      @media (width < 1336px) {
        font-size: 16px;
        padding: 7px 30px;
      }
    }

    &:hover {
      scale: 0.97;
    }

    &:hover h1 {
      padding: 10px;
      background-color: #0009;
    }

    &:hover h2 {
      padding: 10px 60px;
      background-color: var(--main-color);

      @media (width < 1336px) {
        padding: 10px 45px;
      }
    }

    &:hover img {
      filter: none;
    }

    &:hover span {
      opacity: 0.5;
      scale: 1.2;
    }
  }

  :global(.grid-item.animated) {
    scale: 0.9;
    opacity: 0;
  }
</style>
