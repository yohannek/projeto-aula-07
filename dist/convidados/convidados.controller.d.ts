import { CreateConvidadoDto } from './src/convidados/create-convidado.dto.js';
export declare class ConvidadosController {
    private readonly convidados;
    listarTodos(): string[];
    criar(createConvidadoDto: CreateConvidadoDto): {
        mensagem: string;
        dados: CreateConvidadoDto;
    };
}
