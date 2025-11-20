<template>
  <div
    class="
      mx-auto my-12 flex max-w-4xl flex-col items-center rounded-lg bg-black p-8
      text-center
      md:px-20 md:py-20
    "
  >
    <h2
      class="
        text-4xl tracking-tight text-white
        md:text-6xl
      "
    >
      {{ $t('home.cta.title') }}
    </h2>
    <p
      class="
        mt-4 text-lg text-slate-400
        md:text-xl
      "
    >
      {{ $t('home.cta.description') }}
    </p>
    <div class="mt-5 flex">
      <HomeLink
        href="https://qm.qq.com/q/NSCEhAxB2q"
        type="inverted"
        :title="$t('home.cta.button')"
      >
        {{ $t('home.cta.button') }}
      </HomeLink>
    </div>
  </div>
</template>
