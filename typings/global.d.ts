import { RootStore } from "../src/rootStore";

declare global {
  interface Window {
    preloadedPictures: HTMLImageElement[];
    __rootStore: RootStore;
  }
}
