module.exports = (sequelize, dataTypes) => {
    const Profession = sequelize.define("Profession", {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(150),
            allowNull: false
        }
    },{
        tableName: "professions",
        timestamps: true,
        paranoid: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        deletedAt: "deletedAt"
    })

    Profession.associate = models => {
        Profession.hasMany(models.ApplicantProfession, {
            as: "applicant_profession",
            foreignKey: "profession_id"
        })
    }

    return Profession
}