export const getLgBreakpoint = () =>
  parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--breakpoint-lg',
    ),
    10,
  );
