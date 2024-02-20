module.exports = (sequelize, dataTypes) => {
    const Gender = sequelize.define("Gender", {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    },{
        tableName: "genders",
        timestamps: false
    })

    Gender.associate = models => {
        Gender.hasMany(models.Applicant, {
            as: "genders",
            foreingKey: "gender_id"
        })

    }

    return Gender
}