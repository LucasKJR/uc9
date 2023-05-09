import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void { }
  userModel = new User();
  usuariologado =localStorage.getItem("nomeUsuario")
  mensagem=""
  receberDados() {
    console.log(this.userModel)

    this.loginservice.login(this.userModel).subscribe((response) => {
      const routerLink = "/home"
      this.router.navigateByUrl("/home")
      localStorage.setItem("nomeUsuario",response.body.user.nome)

    }
      ,
      (respostaErro => {
     console.log("deu erro")
     this.mensagem = respostaErro.erro
       // alert("erro")
      }
      )
    )

  }


}
