<script>
  import Background from './Background.svelte';
</script>

<div
  id="container"
  class="h-screen w-full flex items-center justify-center opacity-[var(--ready)]"
  style="transition: opacity 0.69s ease-in-out;"
>
  <div id="content" class="w-full lg:w-6/7 font-Outfit">
    <div
      class="lg:grid items-center lg:grid-flow-row lg:grid-cols-2 lg:grid-rows-1"
    >
      <div
        id="box"
        class="box text-white overflow-y-auto overflow-x-hidden grid items-center h-screen pt-16 pb-16 pl-4 pr-4 bg-[var(--bgshade)]"
        style="transition: background 0.69 ease-in-out;"
      >
        <div
          id="boxcontent"
          class="block-inline font-mundial w-full text-[#ece0f3] text-left"
        >
          <slot />
        </div>
      </div>
      <Background />
    </div>
  </div>
</div>

<style>
  :root {
    --primary: #b69bc9;
    --secondary: #e2ceef00;
    --bgshade: #0f0f0f;
    --selection: #ca9eec69;
    --selection-btn: #0f0f0f;
    --ready: 0;

    --bg: 69px;
    --box: -69px;
  }

  ::selection {
    background: var(--selection);
    color: white;
  }

  .bg {
    transform: translateX(var(--bg));
    transition: all 0.69s ease-out;
  }

  .box {
    transform: translateX(var(--box));
    transition: all 0.69s ease-out;
  }

  @tailwind base;
  @layer base {
    h1 {
      @apply text-2xl;
    }
    h2 {
      @apply text-xl;
    }
    h3 {
      @apply text-lg;
    }
    p,
    ul {
      @apply text-base mt-1 mb-1;
    }

    @tailwind components;
    @tailwind utilities;
  }
</style>
