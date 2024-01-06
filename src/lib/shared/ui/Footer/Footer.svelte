<script lang="ts">
  import Icon from '@iconify/svelte'
  import { Link } from 'svelte-routing'
  import { routes } from './routes'
</script>

<footer id="footer">
  <ul class="routes-ul">
    {#each routes as { title, icon, path }}
      <Link class="route-li-footer" to={path}>
        <Icon {icon} />
      </Link>
    {/each}
  </ul>
</footer>

<style lang="scss">
  #footer {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0 50px;
    height: var(--header-height);
    position: fixed;
    bottom: 0;
    left: 0;

    @media (width < 720px) {
      padding: 0 20px;
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

    :global(.route-li-footer) {
      color: inherit;
      text-decoration: none;
      font-size: 16px;
      position: relative;
      padding: 5px 2px;
      transition: 0.2s;
      border-radius: 7px;
      display: grid;
      place-content: center;
      padding: 10px 15px;

      &:hover {
        background-color: white;
      }
    }
  }
</style>
