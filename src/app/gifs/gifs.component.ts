import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit() {
      this.dataservice.getTrendingGifs()
      .subscribe((response: any) => {
        console.log('Data', response);
      });
    }


}
