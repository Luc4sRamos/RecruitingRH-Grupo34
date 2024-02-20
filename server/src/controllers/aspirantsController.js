const { Applicant } = require("../database/models")
const controller = {
    list: async (req, res) => {
        try {
            const aspirantes = await Applicant.findAll()
            return res.status(200).json({
                status: 200,
                message: "aspirants list",
                count: aspirantes.length,
                data: aspirantes
            })
        } catch (error) {
            return res.json(error)
        }
    }
}

module.exports = controller