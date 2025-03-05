import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Corrected event listener function
    const listener = (event) => setMatches(event.matches);

    // Use `addEventListener` instead of `addListener`
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
