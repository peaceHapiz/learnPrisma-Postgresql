-- CreateTable
CREATE TABLE "Siswa" (
    "nis" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "kelas" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Matematika" (
    "kode_guru" INTEGER NOT NULL,
    "nilai" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "matematikaId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Fisika" (
    "kode_guru" INTEGER NOT NULL,
    "nilai" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fisikaId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nis_key" ON "Siswa"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "Matematika_kode_guru_key" ON "Matematika"("kode_guru");

-- CreateIndex
CREATE UNIQUE INDEX "Fisika_kode_guru_key" ON "Fisika"("kode_guru");

-- AddForeignKey
ALTER TABLE "Matematika" ADD CONSTRAINT "Matematika_matematikaId_fkey" FOREIGN KEY ("matematikaId") REFERENCES "Siswa"("nis") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fisika" ADD CONSTRAINT "Fisika_fisikaId_fkey" FOREIGN KEY ("fisikaId") REFERENCES "Siswa"("nis") ON DELETE CASCADE ON UPDATE CASCADE;
