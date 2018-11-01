import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { extend } from 'webdriver-js-extender';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

}
function f(phase) {
  return class {
    sayHi() { alert(phase) }
  }
}
class user extends f('Hello') { };

new user().sayHi();