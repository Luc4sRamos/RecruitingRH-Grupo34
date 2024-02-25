const { Applicant, ApplicantProfession } = require("../database/models")
const controller = {
    list: async (req, res) => {
        try {
            const applicants = await Applicant.findAll({
                include: ["gender"]
            })
            return res.status(200).json({
                meta: {
                    status: 200,
                    message: "Applicants list",
                    url: "/applicants"
                },
                data: {
                    count: applicants.length,
                    applicants
                } 
            })
        } catch (error) {
            return res.json(error)
        }
    },
    create: async (req, res) => {
        try {
            console.log(req.body)
            const { name, lastName, dni, email, phoneNumber, urlLinkedin, birthdate, gender_id, photo, professions } = req.body
            const applicant = await Applicant.create({
                name,
                lastName,
                dni,
                email,
                phoneNumber,
                urlLinkedin,
                birthdate,
                gender_id,
                photo 
            })

            for (const profession of professions) {
                await ApplicantProfession.create({
                    applicant_id: applicant.id,
                    profession_id: profession
                })
            }

            return res.status(201).json({
                status: 201,
                message: "applicant created",
                data: {
                    applicant,
                    professionsId: professions
                }
            })
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = controller