import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function KingVisibility({ kingRef }) {
  const scroll = useScroll();

  useFrame(() => {
    if (!kingRef.current) return;

    const offset = scroll.offset;

    // Fade out between page 3 and 4, fade in after
    let opacity = 1;
    if (offset > 0.15 && offset < 0.25) {
      opacity = 1 - (offset - 0.15) / 0.1; // fade out starting at 25%
    } else if (offset >= 0.25 && offset < 0.3) {
      opacity = 0; // fully hidden
    } else if (offset >= 0.3 && offset < 0.8) {
      opacity = (offset - 0.3) / 0.1; // fade back in starting at 70%
    } else if (offset >= 0.9) {
      opacity = 1; // fully visible again
    }

    kingRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = opacity;
      }
    });
  });

  return null;
}
