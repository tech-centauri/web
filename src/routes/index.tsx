import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-3xl">
        Centauri
      </h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "",
  meta: [
    {
      name: "name",
      content: "description",
    },
  ],
};
