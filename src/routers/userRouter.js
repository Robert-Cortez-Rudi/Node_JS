import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        name: "Robert",
        email: "robert@email.com",
        avatar: "http://github.com/Robert-Cortez-Rudi.png"
    })
})

router.post("/", (req, res) => {
    res.json({
        message: "Usuário criado com sucesso!",
        user: {
            name: "Robert",
            email: "robert@email.com",
            avatar: "http://github.com/Robert-Cortez-Rudi.png"
        }
    })
})

router.put("/", (req, res) => {
    res.json({
        message: "Usuário atualizado com sucesso!",
        info: {
            name: "Roberto",
            email: "Roberto@email.com",
            avatar: "http://github.com/Robert-Cortez-Rudi.png"
        }
    })
})

router.delete("/", (req, res) => {
    res.json({
        message: "Usuário deletado do sistema!!"
    })
})

router.patch("/", (req, res) => {
    res.json({
        message: "Atualizações das informações de: nome, foto",
        updates: {
            name: "Leandro",
            avatar: "http://github.com/Leandro.png"
        }
    })
})

export default router
