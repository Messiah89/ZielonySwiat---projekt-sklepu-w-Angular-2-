import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-moje-realizacje',
  templateUrl: './moje-realizacje.component.html',
  styleUrls: ['./moje-realizacje.component.css']
})
export class MojeRealizacjeComponent implements OnInit {
  title = 'Moje realizacje';
  filtrListy = '';
  realizacje: any[] = [
    {
      // tslint:disable-next-line:max-line-length
      Zdjecie: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/p720x720/78870121_3245544908852539_6472383494503792640_o.jpg?_nc_cat=106&_nc_ohc=Xx_qEKU4fFoAX_XeRZ0&_nc_ht=scontent-waw1-1.xx&_nc_tp=1002&oh=0396332e13afb149062a2347930ddc4a&oe=5E96C3E7',
      Wysokosc: '48 cm',
      Srednica: '32 cm',
      SugerowanaCena: '180 zł',
      DataDodania: '19.01.2020',
    },
    {
      // tslint:disable-next-line:max-line-length
      Zdjecie: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/p720x720/78870121_3245544908852539_6472383494503792640_o.jpg?_nc_cat=106&_nc_ohc=Xx_qEKU4fFoAX_XeRZ0&_nc_ht=scontent-waw1-1.xx&_nc_tp=1002&oh=0396332e13afb149062a2347930ddc4a&oe=5E96C3E7',
      Wysokosc: '50 cm',
      Srednica: '64 cm',
      SugerowanaCena: '80 zł',
      DataDodania: '11.01.2020',
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
