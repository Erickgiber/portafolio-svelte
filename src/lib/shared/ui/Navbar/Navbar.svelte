<script lang="ts">
  import { onMount } from "svelte"
  import { Link, useRouter } from "svelte-routing"
  import { routes } from "./routes"
  let activeRoute = "/"
  let loading = true
  const router = useRouter()

  $: if (!loading) {
    // @ts-ignore
    router.activeRoute.subscribe((val) => {
      const currentPath = val.route._path
      activeRoute = currentPath
    })
  }

  onMount(() => {
    loading = false
  })
</script>

<header id="header">
  <div class="logo">
    <Link class="logo-link" to="/">Erick Ramírez</Link>
  </div>

  <ul class="routes-ul">
    {#each routes as { title, path }}
      <Link
        style={activeRoute === path
          ? "background-color: var(--main-color); padding: 5px 10px; border-radius: 5px 5px 0 0;"
          : null}
        class="route-li"
        to={path}>{title}</Link
      >
    {/each}
  </ul>
</header>

<style lang="scss">
  #header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0 50px;
    height: var(--header-height);

    @media (width < 720px) {
      padding: 0 20px;
    }

    .logo {
      position: relative;
      padding: 5px 0;
      font-size: 25px;

      @media (width < 720px) {
        font-size: calc(1vw + 1.5vh);
        &::after {
          height: 2px;
        }

        &:active::after {
          transition: 0.5s;
          width: 100%;
        }

        &:hover::after {
          width: 20% !important;
        }
      }

      :global(.logo-link) {
        color: inherit;
        text-decoration: none;
      }

      &::after {
        transition: 0.5s;
        content: "";
        width: 20%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--main-color);
        height: 3px;
      }

      &:hover::after {
        transition: 0.2s;
        width: 100%;
      }
    }
  }

  .routes-ul {
    display: flex;
    align-items: center;
    color: var(--main-text-color);
    @media (width < 720px) {
      gap: 10px;
    }

    @media (width > 720px) {
      gap: 30px;
    }

    :global(.route-li) {
      color: inherit;
      text-decoration: none;
      font-size: 16px;
      position: relative;
      padding: 5px 2px;
      transition: 0.2s;

      &::after {
        position: absolute;
        content: "";
        width: 0%;
        transition: 0.5s;
        background-color: var(--main-color);
        height: 1px;
        bottom: 0;
        left: 0;
      }

      &:hover::after {
        transition: 0.2s;
        width: 100%;
      }
    }
  }
</style>
