/**
 * Intersection Observer utility para animar elementos al hacer scroll
 * Uso: Agregar la clase 'animate-on-scroll' a los elementos que quieras animar
 */

export interface AnimateOnScrollOptions {
  /**
   * Selector CSS de los elementos a observar
   * @default '.animate-on-scroll'
   */
  selector?: string;

  /**
   * Margen adicional para activar la animación
   * @default '0px 0px -100px 0px'
   */
  rootMargin?: string;

  /**
   * Porcentaje del elemento que debe ser visible para activar la animación (0-1)
   * @default 0.1
   */
  threshold?: number;

  /**
   * Si true, la animación se ejecuta solo una vez
   * @default true
   */
  once?: boolean;

  /**
   * Clase que se agrega cuando el elemento es visible
   * @default 'visible'
   */
  visibleClass?: string;
}

/**
 * Inicializa el Intersection Observer para animar elementos al hacer scroll
 */
export function initAnimateOnScroll(options: AnimateOnScrollOptions = {}) {
  const {
    selector = ".animate-on-scroll",
    rootMargin = "0px 0px -100px 0px",
    threshold = 0.1,
    once = true,
    visibleClass = "visible",
  } = options;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin,
    threshold,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        entry.target.classList.remove(visibleClass);
      }
    });
  }, observerOptions);

  document.querySelectorAll(selector).forEach((item) => {
    observer.observe(item);
  });

  return observer;
}
