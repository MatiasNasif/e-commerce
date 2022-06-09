import categories from "../utils/fake_api.json";

const categorias= [...new Set(categories.map(category => category.categoria_uno))]

export default categorias