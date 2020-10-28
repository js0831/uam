import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { LocalDataService } from 'src/app/shared/services/local-data.service';
import { environment } from 'src/environments/environment';
import { IApplication } from '../../../shared/interfaces/i-application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  public language = environment.language;
  public editId: string;

  applications = [
    {
      systemId: 'SVC',
      systemDescription: 'SVC',
      allowMultiple: false,
      translations: [
        {
          id: 1,
          keyVal: 'SVC',
          langId: 1,
          value: 'Single View Customer'
        },
        {
          id: 2,
          keyVal: 'SVC',
          langId: 2,
          value: '单视图客户'
        }
      ]
    }
  ];

  constructor(
    private api: ApiService,
    private localDataService: LocalDataService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (environment.staticData){

      if (!this.localDataService.get('applications')){
        this.localDataService.save('applications', this.applications);
      } else {
        this.applications = this.localDataService.get('applications');
      }

      return;
    }

    this.loadData();
  }

  private async loadData(): Promise<any>{
    this.applications = [];
    const list =  await this.api.list('application/getAllApplication').toPromise();
    this.applications = list.lstApplications;
  }

  // private appendCurrentTranslations(translations: any[]): void{
  //   translations.forEach( x => {
  //     const group = this.formBuilder.group({
  //       language: [x.langId.toString(), Validators.required],
  //       value: [x.value, Validators.required]
  //     });
  //     (this.form.get('translations') as FormArray).push(group);
  //   });
  // }



  // async updateApplication(data): Promise<any>{
  //   const updateData = {
  //     oldSystemId: this.editId,
  //     ...data
  //   };

  //   if (environment.staticData){
  //     this.updateApplicationList(data.systemId, updateData.translations);
  //     this.saveLocalData();
  //     return;
  //   }

  //   const updated = await this.api.create('application/updateApplication', updateData).toPromise();
  //   this.updateApplicationList(data.systemId, updated.application.translations);
  //   this.form.reset();
  // }

  private updateApplicationList(systemId, translations): void{
    this.applications = this.applications.map( x => {
      if ( x.systemId === this.editId ) {
        x.systemId = systemId;
        x.translations = translations;
      }
      return x;
    });
  }

  async delete(app: IApplication): Promise<any> {
    const sure = confirm('Are you sure?');
    if (!sure){
      return;
    }

    if (environment.staticData){
      this.applications = this.applications.filter( x => {
        return x.systemId !== app.systemId;
      });
      // this.saveLocalData();
      return;
    }

    const data = {
      oldSystemId: app.systemId,
      ...app
    };
    await this.api.create('application/deleteApplication', data).toPromise();
    this.applications = this.applications.filter( x => x.systemId !== app.systemId);
  }

  view(app: IApplication): void{
    this.localDataService.save('application', app);
    setTimeout( x => {
      this.router.navigate(['application', app.systemId]);
    }, 250);
  }
}
