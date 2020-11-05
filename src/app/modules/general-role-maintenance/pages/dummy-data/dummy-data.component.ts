import { Component, OnInit } from '@angular/core';
import { LocalDataService } from './../../../../shared/services/local-data.service';

@Component({
  selector: 'app-dummy-data',
  templateUrl: './dummy-data.component.html',
  styleUrls: ['./dummy-data.component.scss']
})
export class DummyDataComponent implements OnInit {

  model = {
    organization : '',
    team : '',
    channel : '',
    jobrole : '',
  };

  list = {
    organization : [],
    team : [],
    channel : [],
    jobrole : [],
  };

  constructor(
    private localData: LocalDataService
  ) { }

  ngOnInit(): void {
    const currentData = this.localData.get('dummy-general-roles') || {
      organization : [],
      team : [],
      channel : [],
      jobrole : [],
    };

    this.list = currentData;

  }


  save(what): void{
    const value = this.model[what];
    if (value.length === 0) {
      return;
    }
    this.model[what] = '';
    this.list[what].push({
      id: new Date().getTime(),
      name: value
    });
    this.saveLocalData();
  }

  delete(index, what): void {
    const sure = confirm('Are you sure?');
    if (!sure) {
      return;
    }

    this.list[what] = this.list[what].filter( (el, i) => {
      return i !== index;
    });
    this.saveLocalData();
  }

  private saveLocalData(): void{
    this.localData.save('dummy-general-roles', this.list);
  }

}
