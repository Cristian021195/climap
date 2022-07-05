/*
    TODA ESTA FUNCION TIENE QUE SER MEMORIZADA
    -> esta funcion tiene como unico proposito asignarle el delay a la funcion
    -> cancelar la funcion anterior que llega por parametros en debounce(func, - ) a medida que lo que escribimos este dentro del lapso de delay
    -> le estamos mandando una funcion asincrona en este caso
*/
export const debounce = (func, delay) => {
    let timer;

    return function () {
        const self = this;
        const args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(self, args)
        }, delay);
    }
}
