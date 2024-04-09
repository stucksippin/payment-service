-- CreateTable
CREATE TABLE "transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTransaction" TEXT NOT NULL,
    "idRequester" TEXT NOT NULL,
    "sum" INTEGER NOT NULL,
    "dataSent" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_idTransaction_key" ON "transactions"("idTransaction");
