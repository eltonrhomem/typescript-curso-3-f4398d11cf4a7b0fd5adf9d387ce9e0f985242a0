export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            const t1 = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(
                `Tempo de execução do método ${propertyKey}: ${(t2 - t1) / 1000} segundos`
            );
            return resultado;
        }
        return descriptor;

    }


}