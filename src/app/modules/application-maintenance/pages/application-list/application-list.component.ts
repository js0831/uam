import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { IApplicationStore } from '../../interface/application-store.interface';
import { IApplication } from '../../interface/application.interface';
import { edit, remove } from '../../store/application.actions';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  applications$: Observable<IApplicationStore>;

  constructor(
    private modalService: ModalService,
    private store: Store<{application: IApplicationStore}>,
    private localData: LocalDataService,
    private router: Router
  ) {
    this.applications$ = store.select('application');
  }

  ngOnInit(): void {
    this.subscription = this.applications$.subscribe( application => {
      this.localData.save('applications', application.list);
    });
  }

  add(): void {
    this.modalService.showModal('APPLICATION_FORM', true);
  }

  delete(id: string): void{
    const sure = confirm('Are you sure?');
    if (!sure) { return; }
    this.store.dispatch(remove({id}));
  }

  edit(app: IApplication): void {
    this.store.dispatch(edit({application: app}));
    this.router.navigate(['application-maintenance', 'form']);
  }

  ngOnDestroy(): void {
    this.modalService.reset();
  }
}
