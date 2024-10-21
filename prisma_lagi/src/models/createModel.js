const prisma = require('../config/database')

exports.postUser = async(username,email)=> {
    return await prisma.user.create({
        data : {
            username,
            email,
        }
    })
}

exports.postProfil = async(profilId,nama,bio) => {
    return await prisma.profil.create({
        data : {
            profilId,
            nama,
            bio,
        }
    })
}

exports.postContent = async(authorId,title,content) => {
    return await prisma.post.create({
        data : {
            authorId,
            title,
            content,
        }
    })
}

exports.postCategory = async(categoryId,nama) => {
    return await prisma.category.create({
        data : {
            categoryId,
            nama,
        }
    })
}

