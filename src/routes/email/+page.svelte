<script lang="ts">
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  function validateEmail(email: string | null) {
    if (!email) {
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  }

  let email: string | null = null;
</script>

<div class="flex w-[80%] flex-col items-center justify-center">
  <p class="text-balance text-justify">
    We know it's a bit of a buzzkill to ask for it, but we need your email to send you the results.
    Don't worry—we're not here to spam you or sell your data to shady overlords.
  </p>

  <br />

  <input
    bind:value={email}
    placeholder="john.doe@gmail.com"
    type="email"
    class="flex items-center justify-center border-[1.5px] border-gray-300 px-[25%] py-3 focus:outline-none"
  />

  <br />
  <br />

  {#if validateEmail(email)}
  <a href="/payment">
    <FontAwesomeIcon icon={faArrowRight} class="h-6 text-gray-500" />
  </a>
  {/if}
</div>
