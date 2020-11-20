import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';
import { TeamInterface } from '../interface/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  create(translation: ITranslates): Promise<TeamInterface> {
    return this.httpClient.post<{ team: TeamInterface }>(this.url('/team/createTeam'), {
      team: {
        name: '',
        translation
      }
    }).toPromise()
    .then(response => response.team);
  }

  fetch(): Promise<TeamInterface[]> {
    return this.httpClient.get<{ team: TeamInterface[] }>(this.url('/team/getAllTeam'))
      .toPromise()
      .then(response => response.team);
  }


  delete(item: TeamInterface): Promise<{ deleteResult: string }> {
    return this.httpClient.delete<{ deleteResult: string }>(this.url('/team/deleteTeam'), {
      params: {
        id: item.id.toString()
      }
    }).toPromise();
  }
}
