/*
  Warnings:

  - You are about to drop the `trader` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "trader";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cardHolder" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "busy" BOOLEAN NOT NULL,
    "usersId" INTEGER,
    CONSTRAINT "card_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_card" ("active", "busy", "cardHolder", "cardNumber", "id", "phone") SELECT "active", "busy", "cardHolder", "cardNumber", "id", "phone" FROM "card";
DROP TABLE "card";
ALTER TABLE "new_card" RENAME TO "card";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
