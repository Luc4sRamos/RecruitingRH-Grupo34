module.exports = (sequelize, dataTypes) => {
    const Applicant = sequelize.define("Applicant", {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        dni: {
            type: dataTypes.STRING(10),
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        urlLinkedin: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        birthdate: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        gender_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        photo: {
            type: dataTypes.STRING(400),
            defaultValue: "defaultAvatar.png"
        }
    },{
        tableName: "applicants",
        timestamps: true,
        paranoid: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        deletedAt: "deletedAt"
    })

    Applicant.associate = models => {
        Applicant.belongsTo(models.Gender, {
            as: "gender",
            foreignKey: "gender_id"
        })

        Applicant.hasMany(models.ApplicantProfession, {
            as: "applicant_profession",
            foreignKey: "applicant_id"
        })
    }

    return Applicant
}