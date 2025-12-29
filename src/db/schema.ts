import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const booking = pgTable("booking", {
  id: serial("id").primaryKey(),
  data: text(),
  user: text(),
  status: varchar(),
  scheduledAt: timestamp("scheduled_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const session = pgTable("session", {
  id: serial("id").primaryKey(),
  chat: text(),
  user: text(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const history = pgTable("history", {
  id: serial("id").primaryKey(),
  month: varchar(),
  data: text(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
