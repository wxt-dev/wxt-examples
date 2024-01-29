import '@/assets/main.css';
import typescriptLogo from '@/assets/typescript.svg';
import viteLogo from '/wxt.svg';
import { setupCounter } from '@/components/counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col items-center justify-center min-w-[320px] min-h-screen text-center bg-neutral-50 text-neutral-800 dark:text-neutral-100 dark:bg-neutral-800 antialiased p-8">
    <div class="flex gap-12 mb-8">
      <a href="https://wxt.dev" target="_blank" class="font-medium text-neutral-600 hover:text-neutral-500 no-underline">
        <img src="${viteLogo}" class="h-12 hover:[filter:drop-shadow(0_0_2rem_#54bc4ae0)] transition-[filter]" alt="WXT logo" />
      </a>

      <a href="https://www.typescriptlang.org/" target="_blank" class="font-medium text-neutral-600 hover:text-neutral-500 no-underline">
        <img src="${typescriptLogo}" class="h-12 hover:[filter:drop-shadow(0_0_2rem_#3178c6aa)] transition-[filter]" alt="TypeScript logo" />
      </a>
    </div>

    <h1 class="text-3xl font-semibold">WXT + TypeScript</h1>

    <div class="p-8">
      <button id="counter" type="button" class="rounded-lg border border-transparent px-3 py-1.5 font-medium bg-neutral-200 dark:bg-neutral-900 cursor-pointer hover:border-neutral-600 transition"></button>
    </div>

    <p class="text-neutral-600 dark:text-neutral-400">
      Click on the WXT and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
