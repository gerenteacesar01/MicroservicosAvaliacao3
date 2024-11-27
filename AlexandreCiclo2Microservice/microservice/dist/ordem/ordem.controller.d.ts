import { OrdemService } from './ordem.service';
declare class CreateOrdemDto {
    descricao: string;
    status: string;
}
export declare class OrdemController {
    private readonly ordemService;
    constructor(ordemService: OrdemService);
    create(createOrdemDto: CreateOrdemDto): Promise<{
        descricao: string;
        status: string;
        criadoEm: Date;
        atendidoEm: Date | null;
        id: number;
    }>;
    findAll(): Promise<{
        descricao: string;
        status: string;
        criadoEm: Date;
        atendidoEm: Date | null;
        id: number;
    }[]>;
}
export {};
