export function domImjector(seletor) {
    return function (target, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar no ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
