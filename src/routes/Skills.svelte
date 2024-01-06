<script lang="ts">
  import { onMount } from 'svelte'
  import { skills } from '../lib/shared/info/skills'

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
  <h1 class="title">Skills</h1>
  <br />
  <article id="flex-container">
    {#each skills as { img, tecnology, className }, index}
      <div
        style="transition: {index < 10 ? `0.${index}s` : `${index * 0.1}s`};"
        class={`${className} ${loaded ? 'animated' : ''}`}
      >
        <img src={img} alt={tecnology} />
        <p>{tecnology}</p>
      </div>
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

    #flex-container {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      justify-content: center;

      > div {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        scale: 0.95;
        opacity: 0;

        &.animated {
          scale: 1;
          opacity: 1;
        }

        &.css {
          img {
            padding: 5.5px;
          }
        }

        &.js {
          img {
            padding: 3px;
          }
        }

        &.php {
          img {
            padding: 4px;
          }
        }

        &.gatsby {
          img {
            padding: 6px;
          }
        }

        &.sveltekit {
          img {
            padding: 7px;
            width: 85%;
          }
        }

        img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          object-position: center;
          border-radius: 25px;
        }
      }
    }
  }
</style>
