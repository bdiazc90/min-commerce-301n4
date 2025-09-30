export function sumar(a: number, b: number) {
    const x = a + b;
    const y = x + b;
    const z = x + y;
    return x + y + z;
}

// Implícitamente sumar devuelve "number" (NO HAY DUDAS)