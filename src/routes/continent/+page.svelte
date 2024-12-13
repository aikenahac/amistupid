<script lang="ts">
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  const continents = [
    'Antarctica',
    'Africa',
    'Asia',
    'Australia and Oceania',
    'Europe',
    'North America',
    'South America',
  ];

  let selected: number | null = null;
</script>

<div class="flex flex-col items-center justify-center">
  <p class="mb-8 text-balance text-justify text-2xl font-bold">Where do you currently live?</p>

  {#each continents as continent, i}
    <button
      on:click={() => selected = i}
      class={[
        'mb-4 flex w-full items-center justify-center border-[1.5px] border-gray-300 py-3',
        selected === i && "font-bold border-black"
      ].join(' ')}
    >
      {continent}
    </button>
  {/each}

  <a href="/finish" class="flex w-full items-center justify-center bg-black py-3 text-white">
    Submit
  </a>
</div>
