import { useEffect, useRef, useCallback } from "react";

export default function useInfiniteScroll(callback, loading) {
  const loaderRef = useRef(null);

  const handleObserver = useCallback(
    entries => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        callback(); // tells parent to load next page
      }
    },
    [loading, callback]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "20px", threshold: 1.0 };
    const observer = new IntersectionObserver(handleObserver, option);

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return loaderRef;
}
