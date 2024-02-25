module.exports = (sequelize, dataTypes) => {
    const ApplicantProfession = sequelize.define("ApplicantProfession",{
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        applicant_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        profession_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },{
        tableName: "applicant_profession",
        timestamps: false
    })

    ApplicantProfession.associate = models => {
        ApplicantProfession.belongsTo(models.Applicant, {
            as: "applicant",
            foreignKey: "applicant_id"
        })

        ApplicantProfession.belongsTo(models.Profession, {
            as: "profession",
            foreignKey: "profession_id"
        })
    }

    return ApplicantProfession
}