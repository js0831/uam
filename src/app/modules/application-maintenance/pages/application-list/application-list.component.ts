import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ApplicationService } from '../../../../shared/services/application.service';
import { IApplicationStore } from '../../interface/application-store.interface';
import { IApplication } from '../../interface/application.interface';
import { edit, remove, setList } from '../../store/application.actions';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit, OnDestroy{

  applications$: Observable<IApplicationStore>;

  constructor(
    private modalService: ModalService,
    private store: Store<{application: IApplicationStore}>,
    private router: Router,
    private applicationService: ApplicationService
  ) {
    this.applications$ = store.select('application');
  }

  ngOnInit(): void {
    this.fetchApplications();
  }

  private async fetchApplications(): Promise<void> {
    const applications: IApplication[] = await this.applicationService.getAll();
    this.store.dispatch(setList({ payload: applications }));
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
