-- CreateTable
CREATE TABLE "Collection" (
    "collectionId" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "animeImage" TEXT NOT NULL,
    "animeTitle" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("collectionId")
);

-- CreateTable
CREATE TABLE "Comment" (
    "commentId" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userComment" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "animeTitle" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_animeId_userEmail_key" ON "Collection"("animeId", "userEmail");
