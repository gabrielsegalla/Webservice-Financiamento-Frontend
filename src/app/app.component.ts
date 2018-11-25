import { CalcPrestacao, CalcPrestacaoByUser, Usuario } from './models';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  prestacoes;
  prestacoesByUser;
  public prestacao: CalcPrestacao = new CalcPrestacao();
  public prestacaoByUser: CalcPrestacaoByUser = new CalcPrestacaoByUser();
  public user: Usuario = new Usuario();
  constructor(private service: AppService) {}

  ngOnInit() {
  }

  getPrestacoes() {
    this.service.getPrestacoes(this.prestacao).subscribe(data =>
        this.prestacoes = data.data,
        error => console.log(error)
    );
  }

  getPrestacoesbyUser() {
    this.service.getPrestacoesbyUser(this.prestacaoByUser).subscribe(data =>
        this.prestacoesByUser = data.data,
        error => console.log(error)
    );
  }

  saveUser() {
    this.service.saveUser(this.user).subscribe(data =>
        console.log(data.data),
        error => console.log(error)
    );
  }

  changeTemFgts() {
    this.user.tem_fgts = !this.user.tem_fgts;
  }

}
