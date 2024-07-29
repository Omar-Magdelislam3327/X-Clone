import { Component, inject, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'models/user';
import { UserserviceService } from 'src/app/controllers/userservice.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = new user();
  modalRef: NgbModalRef | undefined;
  closeResult="";

  constructor(private users: UserserviceService, private router: Router, private modalService: NgbModal) {}

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modalRef.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  submit() {
    this.users.get().subscribe((data: any) => {
      let user = data.find((User: any) => {
        return User.email === this.user.email && User.password === this.user.password;
      });

      if (user) {
        localStorage.setItem("logged", "true");
        this.modalRef?.close();
        this.router.navigateByUrl("/home");
      } else {
        alert("Invalid Username or Password");
      }
    });
  }
  create(){
    this.users.post(this.user).subscribe((data:any)=>{
      alert("User Created");
    })
  }
}
