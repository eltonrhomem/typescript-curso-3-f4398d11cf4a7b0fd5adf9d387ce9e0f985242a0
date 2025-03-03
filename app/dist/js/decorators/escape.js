export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            if (typeof retorno === 'string') {
                retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;
        };
    };
    return descriptor;
}
