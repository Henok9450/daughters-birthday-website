declare module 'masonry-layout' {
    class Masonry {
      constructor(element: HTMLElement, options?: any);
      layout(): void;
    }
    export default Masonry;
  }
  
  declare module 'imagesloaded' {
    const imagesLoaded: any;
    export default imagesLoaded;
  }