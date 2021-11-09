export default {
  dashboard: async () => {
    const resultado = await fetch('./api/dashboard.json')
    const json = await resultado.json()
    return json
  },
  detalle_orden: async () => {
    const resultado = await fetch('./api/detalle_orden.json')
    const json = await resultado.json()
    return json
  },
  estados: async () => {
    const resultado = await fetch('./api/estados.json')
    const json = await resultado.json()
    return json
  },
  login: async () => {
    const resultado = await fetch('./api/login.json')
    const json = await resultado.json()
    return json
  },
  oficinas: async () => {
    const resultado = await fetch('./api/oficinas.json')
    const json = await resultado.json()
    return json
  },
  ordenes: async () => {
    const resultado = await fetch('./api/ordenes.json')
    const json = await resultado.json()
    return json
  }
}
