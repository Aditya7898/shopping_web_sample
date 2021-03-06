import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';
import  'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private auth: AuthService,private userService: UserService, private router: Router){
      auth.user$.subscribe(user=>{
        if(user){
          userService.save(user);

          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      });
  }
}
