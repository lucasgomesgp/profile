export function navigateTo(area: string) {
  const focusElement = document.getElementById(area);
  const navElement = document.getElementById("nav");

  focusElement?.focus({
    preventScroll: true,
  });

  window.scrollTo({
    top: focusElement!.offsetTop - navElement!.offsetHeight + 80,
    behavior: "smooth",
  });
}

export function navigateToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}