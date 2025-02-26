import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "Área de imóveis!",
        notes: "Aqui você pode acessar os imovéis, deletar imóveis e atualiza-los!"
    })
})

router.post("/", (req, res) => {
    res.json({
        message: "Cadastro de imóvel concluido com sucesso!",
        address: {
            number: 1402,
            rua: "Rua express node js"
        }
    })
})

router.put("/", (req, res) => {
    res.json({
        message: "Alterações no endereço do imóvel feito sem problemas!",
        updates: {
            number: 1234,
            rua: "Rua sem nome caragua"
        }
    })
})

router.delete("/", (req, res) => {
    res.json({
        message: "Imóvel removido com sucesso!"
    })
})

router.patch("/", (req, res) => {
    res.json({
        message: "Dados alterados do imóvel: number",
        addressUpdate: {
            number: 2510,
            rua: "Rua express node js"
        }
    })
})

export default router
