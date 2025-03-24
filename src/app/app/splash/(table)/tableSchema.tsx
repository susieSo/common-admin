import { z } from "zod";

export const expenseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  department: z.enum(["Finance", "HR", "IT", "Marketing"]),
  authority: z.enum(["Administrator", "Manager"]),
  type: z.enum(["Income", "Expense"]),
  amount: z.number(),
  date: z.string(),
});

export type Expense = z.infer<typeof expenseSchema>;
