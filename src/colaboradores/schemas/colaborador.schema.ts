import { z } from 'zod';

export const colaboradorSchema = z.object({
    nome: z
    .string()
    .min(
        3,
         "O campo 'nome' deve ter no mínimo 3 letras"
        ),
    email: z.email(
        "O campo 'email' deve ter um formato válido"
    ),
    idade: z
    .number()
        .min(18, "O campo 'idade' deve ser no mínimo 18")
        .max(65, "O campo 'idade' deve ser no máximo 65"),
    departamento: z.enum(['TI', 'RH', 'Vendas'], {
        error:
         "O campo 'departamento' deve ser 'TI', 'RH' ou 'Vendas'",
    }),
});

export type CreateColaboradorDto = z.infer<
typeof colaboradorSchema
>;