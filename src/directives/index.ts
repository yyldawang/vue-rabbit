import { useIntersectionObserver } from "@vueuse/core";
import type { App, DirectiveBinding } from "vue";

export const lazyPlugin = {
  install(app: App) {
    app.directive("img-lazy", {
      mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
