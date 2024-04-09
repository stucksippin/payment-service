/*
  Warnings:

  - You are about to alter the column `status` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTransaction" TEXT NOT NULL,
    "idRequester" TEXT NOT NULL,
    "sum" INTEGER NOT NULL,
    "dataSent" DATETIME NOT NULL,
    "status" INTEGER NOT NULL
);
INSERT INTO "new_transactions" ("dataSent", "id", "idRequester", "idTransaction", "status", "sum") SELECT "dataSent", "id", "idRequester", "idTransaction", "status", "sum" FROM "transactions";
DROP TABLE "transactions";
ALTER TABLE "new_transactions" RENAME TO "transactions";
CREATE UNIQUE INDEX "transactions_idTransaction_key" ON "transactions"("idTransaction");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
