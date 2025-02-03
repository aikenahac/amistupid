<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<div class="flex flex-col items-center justify-center">
  <form method="POST" use:enhance>
    <button class="border border-gray-500 px-4 py-2" type="submit">
      <p class="text-gray-500">Pay up first ($1.00)</p>
    </button>
  </form>
</div>
