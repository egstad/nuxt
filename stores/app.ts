import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    appHasLoaded: false as boolean | false,
    routeIsTransitioning: true as boolean | true,
  }),
  actions: {
    setAppHasLoaded(loaded: boolean) {
      this.appHasLoaded = loaded;
    },
    setRouteIsTransitioning(transitioning: boolean) {
      this.routeIsTransitioning = transitioning;
    },
  },
});
