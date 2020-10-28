import { Component, OnInit } from '@angular/core';
import { ICustomApplicationFormat } from '../../../shared/interfaces/i-custom-application-format';
import { ApplicationService } from '../../../shared/services/application.service';
import { EVENTS, EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  public applications: ICustomApplicationFormat[];

  constructor(
    private eventService: EventService,
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.fetchApplications();
  }

  addNewApplication(): void {
    this.eventService.dispatch({ type: EVENTS.SHOW_ADD_APP_MODAL });
  }

  async delete(app: ICustomApplicationFormat) {
    if (confirm('Are you sure?')) {
      try {
        await this.applicationService.delete(app.systemId).toPromise();
        this.removeApplicationFromList(app);
      } catch (error) {
        alert('Something went wrong. Unable to delete the application.');
      }
    }
  }

  private removeApplicationFromList(application: ICustomApplicationFormat) {
    this.applications = this.applications.filter(item => item.systemId !== application.systemId);
  }

  private async fetchApplications(): Promise<void> {
    const response: { applications: ICustomApplicationFormat[] } = await this.applicationService.fetch().toPromise();
    this.applications = response.applications;
    console.log(this.applications[0]);
  }

}
