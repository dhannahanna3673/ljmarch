@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-[#fcfaf8] text-ink antialiased;
}

* {
  box-sizing: border-box;
}

a,
button {
  @apply transition-all duration-300;
}

.section-shell {
  @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
}

.eyebrow {
  @apply text-xs font-semibold uppercase tracking-[0.35em] text-taupe;
}

.section-title {
  @apply font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl;
}

.body-copy {
  @apply text-sm leading-7 text-[#5e5763] sm:text-base;
}

.card-border {
  @apply border border-[#e7dfd8];
}

.image-frame {
  @apply rounded-[28px] border border-dashed border-[#d8cdc5] bg-[#f7f1ec];
}

.btn-primary {
  @apply inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#1d1921];
}

.btn-secondary {
  @apply inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink hover:-translate-y-0.5 hover:bg-ink hover:text-white;
}

.serif {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}
