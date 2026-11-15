export function createPageLifecycle() {
  const controller = new AbortController();
  const timers = new Set();

  return {
    listen(target, type, listener, options = {}) {
      target?.addEventListener(type, listener, {
        ...(typeof options === 'boolean' ? { capture: options } : options),
        signal: controller.signal,
      });
    },
    setTimeout(callback, delay) {
      const id = window.setTimeout(() => {
        timers.delete(id);
        if (!controller.signal.aborted) callback();
      }, delay);
      timers.add(id);
      return id;
    },
    clearTimeout(id) {
      window.clearTimeout(id);
      timers.delete(id);
    },
    cleanup() {
      controller.abort();
      timers.forEach(id => window.clearTimeout(id));
      timers.clear();
    },
  };
}
