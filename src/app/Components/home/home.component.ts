import { Component, OnInit ,Input} from '@angular/core';
import { GitapiService } from '../../Services/gitapi.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  orgsearch : String;
  SEARCH_ITEMS_PER_PAGE :Number;
  public no_of_top_committees : Number;
  repos : any [];
  constructor(private apiservice :GitapiService ) { }

  getRepo(name: String, SEARCH_ITEMS_PER_PAGE :Number)
  {
    this.apiservice.serachRepo(name,SEARCH_ITEMS_PER_PAGE).subscribe(
      (data =>
        {
          this.repos =data.items;
          console.log(data.items);
        })
    )
  }

  ngOnInit(): void {
  }

}
