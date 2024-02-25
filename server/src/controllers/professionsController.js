const { Profession, ApplicantProfession } = require("../database/models")
const controller = {
    list: async (req, res) => {
        try {
            const professions = await Profession.findAll({
                attributes: ["id", "name"],
                include: [{ association:"applicant_profession", include: ["applicant"]}]
            })

            const professionsList = []
            for (const profession of professions) {
                const { id, name, applicant_profession } = profession
                const totalApplicants = []

                for (const { applicant } of applicant_profession) {
                    if (applicant) {
                        totalApplicants.push(applicant)
                    }
                }

                professionsList.push({
                    id,
                    name,
                    totalApplicants: totalApplicants.length,
                    detail: `/professions/${profession.id}`
                })
            }

            return res.status(200).json({
                meta: {
                    status: 200,
                    message: "professions list",
                    url: "/professions/",
                },
                data: {
                    count: professions.length,
                    professionsList  
                } 
            })
        } catch (error) {
            return res.json(error)
        }
    },
    detail: async (req, res) => {
        try {
            const paramId = req.params.id

            const profession = await Profession.findByPk(paramId, {
                attributes: ["id", "name"]
            })

            const applicantsRaw = await ApplicantProfession.findAll({
                where: { profession_id: paramId },
                include: [ "applicant" ]
            })

            const applicantsList = []
            for (const applicantRaw of applicantsRaw) {
                if (applicantRaw.applicant) {
                    const { id, name, lastName, dni, email, phoneNumber, urlLinkedin, birthdate, gender_id, photo, createdAt, updatedAt } = applicantRaw.applicant
                    applicantsList.push({
                        id,
                        name,
                        lastName,
                        dni,
                        email,
                        phoneNumber,
                        urlLinkedin,
                        birthdate,
                        gender_id,
                        photo,
                        createdAt,
                        updatedAt
                    })
                }
            }

            return res.status(200).json({
                meta: {
                    status: 200,
                    url: `/professions/${paramId}`,
                    message: `Profession detail of: ${profession.name}`
                },
                data: {
                    profession: profession.name,
                    totalApplicants: applicantsList.length,
                    applicantsList
                }
            })
        } catch (error) {
            return res.json(error)
        }
    }
}

module.exports = controller