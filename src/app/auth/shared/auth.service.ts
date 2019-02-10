import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
const jwt = new JwtHelperService();
import * as moment from 'moment';

//import 'rxjs/Rx';

class DecodecToken {
    exp : number = 0;
    username : string = '';
    
}

@Injectable()
export class AuthService {
    private decodedToken;

    constructor(private http : HttpClient){ 

        this.decodedToken = JSON.parse(localStorage.getItem('AngApp_meta')) || new DecodecToken();
    }

    public saveToken(token : string) : string {
        
      this.decodedToken = jwt.decodeToken(token);

        localStorage.setItem('AngApp_Auth', token);
        localStorage.setItem('AngApp_meta', JSON.stringify(this.decodedToken));

        return token;
    }

    private getExpiration () {
      return  moment.unix(this.decodedToken.exp); 
    }

    public login(userData : any): Observable<any>{
        //return this.http.post('http://jsonplaceholder.typicode.com/users',userData);
        return this.http.post('api/v1/users/auth',userData).pipe(map( 
            (token : string) => {
                return this.saveToken(token);
            })
        );
    }

    public logout(){

        localStorage.removeItem('AngApp_Auth');
        localStorage.removeItem('AngApp_meta');

        this.decodedToken = new DecodecToken();        
    }

    public isAuthenticated() : boolean {
        return moment().isBefore(this.getExpiration());
    }

    public getAuthToken() : string {
        return localStorage.getItem('AngApp_Auth');
    }
    
    public getUsername () : string {
        return this.decodedToken.username;
    }
}