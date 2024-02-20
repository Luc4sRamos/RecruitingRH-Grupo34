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
            type: dataTypes.DATE,
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
        Applicant.belongsToMany(models.Profession, {
            as: "professions",
            through: "applicant_profession",
            foreignKey: "applicant_id",
            otherKey: "profession_id",
            timestamps: false
        })

        Applicant.belongsTo(models.Gender, {
            as: "genders",
            foreingKey: "gender_id"
        })
    }

    return Applicant
}