import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    // animation triggers go here
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
            animate('550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )

          )
        ], { optional: true }),
        query(':leave',
          animate('50ms', style({ opacity: 0 })), { optional: true })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  users$: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    // this will be executed when the users component is loaded 
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
