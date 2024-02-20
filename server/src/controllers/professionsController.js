const { Profession } = require("../database/models")
const controller = {
    list: async (req, res) => {
        try {
            const profession = await Profession.findAll()
            return res.status(200).json({
                status: 200,
                message: "professions list",
                count: profession.length,
                data: profession
            })
        } catch (error) {
            return res.json(error)
        }
    }
}

module.exports = controller