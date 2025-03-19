import { create } from "../../models/propertyModel.js"

export default async function createPropertyController(req, res) {
    const property = req.body

    //TODO validar e inserir no BD
    const result = await create(property)

    return res.json({
        message: "Imóvel criado com sucesso!",
        property: result
    })
}
