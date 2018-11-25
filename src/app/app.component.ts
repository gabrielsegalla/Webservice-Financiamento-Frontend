import { CalcPrestacao, CalcPrestacaoByUser, Usuario, PipeUser } from './models';
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
  users;
  public prestacao: CalcPrestacao = new CalcPrestacao();
  public prestacaoByUser: CalcPrestacaoByUser = new CalcPrestacaoByUser();
  public user: Usuario = new Usuario();
  public pipeUser: PipeUser = new PipeUser();
  constructor(private service: AppService) {}

  ngOnInit() {
    this.pipeUser.offset = 0;
    this.pipeUser.limit = 20;
    this.getUsers();
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

  getUsers() {
    this.service.getUsers(this.pipeUser).subscribe(data =>
        this.users = data,
        error => console.log(error)
    );
  }

}
