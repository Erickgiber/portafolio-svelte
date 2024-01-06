<script lang="ts">
  import "./styles.scss"
</script>

<div class="star"></div>
{#each Array(15) as _, index}
  <div class="meteor-{index + 1}"></div>
{/each}
