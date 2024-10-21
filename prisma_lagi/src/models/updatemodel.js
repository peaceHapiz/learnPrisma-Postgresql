const prisma = require('../config/database')

exports.updateUser = async (id,username,email) => {
    return await prisma.user.update({
        where : {id : id},
        data : {
            username,
            email,
        }
    })
}

exports.updateProfil = async (id,nama,bio) => {
    return await prisma.profil.update({
        where : {id : id},
        data : {
            nama,
            bio,
        }
    })
}