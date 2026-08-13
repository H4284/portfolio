import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

type Listener = (entry: IntersectionObserverEntry) => void;

const listeners = new WeakMap<Element, Listener>();
const observerCache = new Map<string, IntersectionObserver>();

let rafScheduled = false;
const pendingUpdates = new Set<() => void>();

function scheduleUpdate(update: () => void) {
  pendingUpdates.add(update);
  if (rafScheduled) return;

  rafScheduled = true;
  requestAnimationFrame(() => {
    pendingUpdates.forEach((fn) => fn());
    pendingUpdates.clear();
    rafScheduled = false;
  });
}

function getSharedObserver(threshold: number, rootMargin: string) {
  const key = `${threshold}|${rootMargin}`;
  let observer = observerCache.get(key);

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          listeners.get(entry.target)?.(entry);
        }
      },
      { threshold, rootMargin },
    );
    observerCache.set(key, observer);
  }

  return observer;
}

export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px 100px 0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver(threshold, rootMargin);

    const onEntry = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        scheduleUpdate(() => setIsInView(true));
        if (triggerOnce) observer.unobserve(element);
      } else if (!triggerOnce) {
        scheduleUpdate(() => setIsInView(false));
      }
    };

    listeners.set(element, onEntry);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      listeners.delete(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
