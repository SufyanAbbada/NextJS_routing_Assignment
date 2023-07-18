-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "frontcontent" TEXT NOT NULL,
    "maincontent" TEXT NOT NULL,
    "belowtitle" TEXT NOT NULL,
    "belowcontent" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "postimage" TEXT NOT NULL,
    "userimage" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

