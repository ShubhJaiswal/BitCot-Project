import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    private url: string;
    constructor(private auth: AuthService, private router: Router) { }

    private handleAuthState(): boolean { debugger
        if(this.isLoginOrRegister()){
            this.router.navigate(['/cart'])
            return false;
        }
        return true;
    }   
    private handleNotAuthState(): boolean  { debugger
        if(this.isLoginOrRegister()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    private isLoginOrRegister(): boolean{
        console.log(this.url);
        if(this.url.includes('login') || this.url.includes('register')){
            return true;
        }
        return false;
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        console.log(this.url);
        if (this.auth.isAuthenticated()) {
            return this.handleAuthState();
        }

        return this.handleNotAuthState();
    }


}