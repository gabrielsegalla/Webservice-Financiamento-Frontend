import { CalcPrestacao, CalcPrestacaoByUser, Usuario, PipeUser } from './models';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {

  prestacoes: JSON;
  apiUrl: any;


  constructor(private httpClient: Http) {
    this.apiUrl = 'https://webservice-financiamento.herokuapp.com'
  }


  public getPrestacoes(prestacao: CalcPrestacao) {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    return this.httpClient.post(
      this.apiUrl + '/calcular/prestacoes?valor_imovel='+ prestacao.valor_imovel + '&taxa_juros=' + prestacao.taxa_juros + '&percentual_entrada=' + prestacao.percentual_entrada + '&qt_parcelas='+ prestacao.qt_parcelas, options
    ).map(
      (res) => res.json());
  }

  public getPrestacoesbyUser(user: CalcPrestacaoByUser) {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    return this.httpClient.post(
      this.apiUrl + '/calcular/possibilidade/compra/usuario/' + user.id + '?valor_imovel=' + user.valor_imovel +
      '&prazo_financiamento_anos=' + user.prazo_financiamento_anos,
      options
    ).map(
      (res) => res.json());
  }

  public saveUser(user: Usuario) {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    return this.httpClient.post(
      this.apiUrl + '/novo/usuario?nome_completo=' +
      user.nome_completo + '&cpf=' + user.cpf + '&data_nascimento=' + user.data_nascimento +
      '&valor_fgts=' + user.valor_fgts + '&tem_fgts=' + user.tem_fgts + '&salario_usuario=' + user.salario_usuario +
      '&taxa_anual=' + user.taxa_anual + '&percentual_entrada=' + user.percentual_entrada,
      options
    ).map(
      (res) => res.json());
  }

  public getUsers(pipeUser: PipeUser) {
    return this.httpClient.get( this.apiUrl + '/usuarios?offset=' + pipeUser.offset + '&limit=' + pipeUser.limit ).map(
      (res) => res.json());
  }
}
