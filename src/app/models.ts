export class CalcPrestacao {
    valor_imovel: number;
    taxa_juros: number;
    percentual_entrada: number;
    qt_parcelas: number;
}


export class CalcPrestacaoByUser {
    valor_imovel: number;
    prazo_financiamento_anos: number;
    id: number;
}

export class Usuario {
    salario_usuario: number;
    taxa_anual: number;
    id: number;
    percentual_entrada: number;
    nome_completo: string;
    data_nascimento: string;
    valor_fgts: number;
    tem_fgts: boolean;
    email: string;
    cpf: string;
}

export class PipeUser {
    offset: number;
    limit: number;
}
