import { useEffect, useState } from 'react';

export function useNavbarCompact(threshold = 40) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  useEffect(() => {
    document.body.classList.toggle('nav-compact', isCompact);
    return () => document.body.classList.remove('nav-compact');
  }, [isCompact]);

  return isCompact;
}
