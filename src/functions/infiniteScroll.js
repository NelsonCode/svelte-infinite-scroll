export const infiniteScroll = ({ fetch, element }) => {
  if (element) {
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        fetch();
      }
    });

    observer.observe(element);
  }
};
