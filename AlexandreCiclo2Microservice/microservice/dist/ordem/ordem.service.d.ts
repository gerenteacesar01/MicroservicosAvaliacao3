import { PrismaService } from '../prisma/prisma.service';
export declare class OrdemService {
    private prisma;
    constructor(prisma: PrismaService);
    createOrder(descricao: string, status: string): Promise<{
        descricao: string;
        status: string;
        criadoEm: Date;
        atendidoEm: Date | null;
        id: number;
    }>;
    getAllOrders(): Promise<{
        descricao: string;
        status: string;
        criadoEm: Date;
        atendidoEm: Date | null;
        id: number;
    }[]>;
}
