export function domImjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement | null = null;
    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `buscando elemento do DOM com o seletor ${seletor} para injetar no ${propertyKey}`
        );
      }
      return elemento;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
