export function domInjector(seletor: string) {
    return (target: string, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(`Modificando o prototype de ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento: HTMLElement;
        const getter = function() {
            if(!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
                return elemento;
            }
            return elemento;
        }

        Object.defineProperty(target, propertyKey,{
            get: getter
        })

    }

}