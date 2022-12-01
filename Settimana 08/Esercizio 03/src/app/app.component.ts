import { Component, OnInit } from '@angular/core';
import { getPosts } from './post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Routing';


  ngOnInit(): void {
    getPosts();
  }
}
