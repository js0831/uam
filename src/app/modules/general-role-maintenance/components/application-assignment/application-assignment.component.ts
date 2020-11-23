import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IApplicationStore } from 'src/app/modules/application-maintenance/interface/application-store.interface';
import { IApplication } from 'src/app/modules/application-maintenance/interface/application.interface';

@Component({
  selector: 'app-application-assignment',
  templateUrl: './application-assignment.component.html',
  styleUrls: ['./application-assignment.component.scss']
})
export class ApplicationAssignmentComponent implements OnInit {

  @Output() onchange = new EventEmitter<IApplication[]>();

  application: string;
  applications: IApplication[] = [];
  applications$: Observable<IApplicationStore>;

  constructor(
    private store: Store<{application: IApplicationStore}>
  ) {
    this.applications$ = store.select('application');
  }

  ngOnInit(): void {
  }

  isAlreadyAdded(appId: string): boolean{
    return this.applications.filter( x => appId === x.id).length > 0;
  }

  add(): void {
    if (!this.application) { return; }
    this.applications$.subscribe( (x: IApplicationStore) => {
      const toAdd = x.list.filter(attr => attr.id === this.application)[0];
      this.applications.push(toAdd);
    });

    this.application = '';

    this.onchange.emit(this.applications);
  }

  removeApplication(app: IApplication): void{
    this.applications = this.applications.filter( x => x.id !== app.id );
    this.onchange.emit(this.applications);
  }
}
