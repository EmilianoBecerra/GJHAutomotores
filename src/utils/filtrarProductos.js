import { distanciaLeveshtein } from "./distanciaLevenshtein";

export function filtrarProductos(input, productos, umbralMaximo = 2) {
    const inputNormalizado = input.toLowerCase().trim();

    if (inputNormalizado === "") return [];

    const coincidenciasExactas = productos.filter((producto) => producto.modelo.toLowerCase().includes(inputNormalizado) || producto.marca.toLowerCase().includes(inputNormalizado));

    if (coincidenciasExactas.length > 0) { return coincidenciasExactas; }

    const productosConDistancia = productos.map(producto => ({
        ...producto,
        distanciaModelo: distanciaLeveshtein(inputNormalizado, producto.modelo),
        distanciaMarca: distanciaLeveshtein(inputNormalizado, producto.marca)
    }))

    const coincidenciasAproximadas = productosConDistancia
        .filter(p => p.distanciaModelo < umbralMaximo || p.distanciaMarca < umbralMaximo)
        .sort((a, b) => a.distanciaModelo - b.distanciaModelo || a.distanciaMarca - b.distanciaMarca)


    return coincidenciasAproximadas;
}