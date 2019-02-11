import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service'
import { Router} from '@angular/router';
import { ProductService } from '../../product/shared/product.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm : FormGroup;
 errors : any[] = [];
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router, private prdService : ProductService
                ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm (){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,
                  Validators.pattern('^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*')]],
      password: ['',Validators.required]
    });
  }


  isInvalidForm(fieldName): boolean {
      return this.loginForm.controls[fieldName].invalid && 
      (this.loginForm.controls[fieldName].dirty ||
        this.loginForm.controls[fieldName].touched)
  }

  isRequired(fieldName) : boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }

  login(){ debugger
    this.auth.login(this.loginForm.value).subscribe ( token => {
      // if(this.prdService.showCartItems){
      //   this.router.navigate(['/cart'])  
      // }else{
        
         this.router.navigate(['/'])
      //}
      
      
    }, 
    (errorResponse) => {
        this.errors = errorResponse.error.errors;
    })
//    console.log(this.loginForm.value);
  }

}
