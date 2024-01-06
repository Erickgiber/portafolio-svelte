<script lang="ts">
  import { onMount } from 'svelte'
  import { Link } from 'svelte-routing'
  import photo from '../assets/photo.jpg'
  import Footer from '../lib/shared/ui/Footer/Footer.svelte'
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

  <title>Erick Ramírez</title>
</svelte:head>

<main class:animated={!loaded} id="container">
  <div class="top">
    <h1 class="title">Hi, I'm Erick Ramírez</h1>
    <img
      style="width: 350px;
    height: 350px;
    max-width: 350px;
    max-height: 350px;
    border-radius: 20%;
    object-fit: cover;"
      class="photo"
      src={photo}
      alt="Erick Ramírez"
    />
    <!-- <span class="info-text"> Full stack developer / Web Designer </span> -->
  </div>

  <div class="bottom">
    <p class="description">
      I am a full stack web developer with years of experience working with
      companies, as a freelancer and personal non-commercial projects.
    </p>
    <Link class="go-to-projects-link" to="/projects">Go to projects</Link>
  </div>
</main>

<Footer />

<style lang="scss">
  #container {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    transition: 0.5s;
    max-width: 1920px;
    margin: 0 auto;

    &.animated {
      opacity: 0;
      scale: 0.99;
    }

    @media (width < 720px) {
      flex-direction: column;
      justify-content: initial;
    }

    .bottom,
    .top {
      width: 100%;
      height: max-content;
      text-wrap: balance;

      @media (width < 720px) {
        min-height: initial;
        width: 100% !important;
      }
    }

    .bottom {
      margin-top: 20px;
      max-width: 720px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .description {
        color: var(--dark-text-color);
        margin-bottom: 30px;
        text-align: center;

        @media (width > 1336px) {
          font-size: calc(1.3vw + 0.5vh);
        }
      }

      :global(.go-to-projects-link) {
        text-decoration: none;
        color: #ffffff;
        padding: 7px 12px;
        border-radius: 5px;
        transition: 0.15s;
        font-size: 20px;
        background-color: #fff;
        color: #000;
        user-select: none;

        &:hover {
          background-color: var(--main-color);
          color: #ffffff;
        }
      }
    }

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: 30px;

      .title {
        font-size: 30px;

        @media (width < 720px) {
          font-size: calc(1.5vw + 2vh);
          margin-bottom: 15px;
        }

        @media (width > 1336px) {
          font-size: calc(1.5vw + 1.5vh);
        }
      }

      @media (width < 720px) {
        width: max-content;
        height: max-content;

        .photo {
          width: 90% !important;
          height: 90%;
        }
      }

      .photo {
        box-shadow: 5px 5px 10px 0 #0005;
        z-index: 50;
        user-select: none;
        background-color: #202020;

        @media (width < 400px) {
          max-height: 300px;
        }
      }

      // .info-text {
      //   font-size: 25px;
      //   overflow: hidden; /* Oculta el exceso de texto */
      //   border-right: 0.15em solid orange; /* Crea el efecto de cursor */
      //   white-space: nowrap; /* Evita que el texto se ajuste automáticamente */
      //   letter-spacing: 0.15em; /* Espaciado entre letras */
      //   animation:
      //     typing 3.5s steps(40, end),
      //     blink-caret 0.75s step-end infinite;
      //   text-shadow: 1px 3px 0 var(--main-color);
      // }
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 55%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
</style>
