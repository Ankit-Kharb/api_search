import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {

  @Input() committes : any[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
