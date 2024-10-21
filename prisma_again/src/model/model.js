const prisma = require('../config/database')

exports.postSiswa = async (nama, kelas) => {
    return await prisma.siswa.create({
        data: {
            
            nama,
            kelas
        }
    })
}

exports.postMatematika = async (matematikaId,kode_guru, nilai) => {
    return await prisma.matematika.create({
        data : {
            matematikaId,
            kode_guru,
            nilai
            
        }
    })
}

exports.postFisika = async (post) => {
    return await prisma.fisika.create({data:post})
}



exports.updateMatematika = async (matematikaId,kode_guru, nilai) => {
    return await prisma.matematika.update({
        where:{
            nis : matematikaId,
        },

        data:{
            matematikaId,
            kode_guru,
            nilai,
        }
    })
}

exports.updateSiswa = async (nis,nama,kelas) => {
    return await prisma.siswa.update ({
        where :{
            nis : nis,
        },

        data: {
            nis,
            nama,
            kelas,
        }
    })
}