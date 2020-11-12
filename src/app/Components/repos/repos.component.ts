import { Component, OnInit,Input } from '@angular/core';
import { GitapiService } from '../../Services/gitapi.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repos : any [];
  @Input() no_of_top_committees : Number;
  committes : any [];
  id : String ;

  touched : boolean [] =new Array(1000).fill('false');
  constructor(private apiservice: GitapiService) { }

  getcommittes(id : string, index :string)
  {
    this.touched[index] =  !this.touched[index];
    this.apiservice.top_committees(id,this.no_of_top_committees ).subscribe(
      (data =>
        {
          this.committes = data.slice(0,this.no_of_top_committees);
        
        })
    )
  }

  ngOnInit(): void {
  }

}
