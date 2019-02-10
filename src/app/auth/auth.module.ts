import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service'
import { AuthGuard } from './shared/auth.gaurd';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor'

const routes : Routes = [
    { path : 'login', component: LoginComponent,  canActivate: [AuthGuard]},
    { path : 'register', component: RegisterComponent,  canActivate: [AuthGuard]}
]
@NgModule({

    declarations : [
        LoginComponent,
        RegisterComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        
    ],
    providers : [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    
    ]
})

export class AuthModule {

} 