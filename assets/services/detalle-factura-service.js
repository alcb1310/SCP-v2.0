import axios from 'axios';

export function grabaDetalleFactura(
    factura,
    partida,
    cantidad,
    unitario,
    total
) {
    return axios({
        method: 'post',
        url: '/graba/detallefactura',
        params: {
            factura,
            partida,
            cantidad,
            unitario,
            total,
        },
    });
}
