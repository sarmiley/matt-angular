import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DrinkService} from './../drink/drink.service';
import * as JsEncryptModule from 'jsencrypt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;
  encData: string;
  publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmWI2jtKwvf0W1hdMdajch+mFx9FZe3CZnKNvT/d0+2O6V1Pgkz7L2FcQx2uoV7gHgk5mmb2MZUsy/rDKj0dMfLzyXqBcCRxD6avALwu8AAiGRxe2dl8HqIHyo7P4R1nUaea1WCZB/i7AxZNAQtcCcSvMvF2t33p3vYXY6SqMucMD4yHOTXexoWhzwRqjyyC8I8uCYJ+xIfQvaK9Q1RzKRj99IRa1qyNgdeHjkwW9v2Fd4O/Ln1Tzfnk/dMLqxaNsXPw37nw+OUhycFDPPQF/H4Q4+UDJ3ATf5Z2yQKkUQlD45OO2mIXjkWprAmOCi76dLB2yzhCX/plGJwcgb8XHEQIDAQAB';
  jsencrypt;

  testObservable1: Observable<any>;
  testObservable2: Observable<any>;



  constructor(private router: Router, private route: ActivatedRoute, private drinkService: DrinkService) {
    this.jsencrypt = new JsEncryptModule.JSEncrypt();
   }

  ngOnInit(): void {
    console.log('init');
    console.log(this.drinkService.getObShops());
  }

  send(): void {
    console.log(this.message);
    this.router.navigate(['logout', {message: this.message}]);
  }

  encryptSend(): void {
    this.jsencrypt.setPublicKey(this.publicKey);
    this.encData = this.jsencrypt.encrypt(this.message);
  }


  testThread1(): void {
    this.testObservable1 = new Observable(observer => {
      for (let i = 1; i < 50 ; i++) {
        setTimeout(() => {
          observer.next('Rx1 ' + i);
        }, 1000);
      }
    });

    console.log('start');
    this.testObservable1.subscribe(value => {
      console.log(value);
    });
    console.log('end');
  }

  testThread2(): void {

  }


}
