export function translateElement(element: HTMLElement, range: number | string) {
  element.style.transform = 'translateX(' + range + 'px)';
}
