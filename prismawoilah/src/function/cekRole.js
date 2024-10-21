const prisma = require('../model/model');


const isSuperAdmin = async (req, res, next) => {
    const { userId } = req.body; 
  
    try {
      const user = await prisma.user.findFirst({ where: { id: userId } });
      if (user && user.role === 'SUPER_ADMIN') {
        next(); 
      } else {
        return res.status(403).json({ message: 'Akses ditolak. Hanya untuk Super Admin.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    }
  };
const isAdmin = async (req, res, next) => {
    const { userId } = req.body; 
  
    try {
      const user = await prisma.user.findFirst({ where: { id: userId } });
      if (user && (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN')) {
        next(); 
      } else {
        return res.status(403).json({ message: 'Akses ditolak. Hanya untuk Super Admin, dan admin.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    }
  };
  



module.exports = { isSuperAdmin, isAdmin };
