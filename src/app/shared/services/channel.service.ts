import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';
import { ChannelInterface } from '../../shared/interface/channel.interface';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private httpClient: HttpClient) { }

  private url(url: string) {
    return `${environment.hostUrl}${url}`;
  }

  create(translation: ITranslates): Promise<ChannelInterface> {
    return this.httpClient.post<{ channel: ChannelInterface }>(this.url('/channel/createChannel'), {
      channel: {
        name: '',
        translation
      }
    }).toPromise()
    .then(response => response.channel);
  }

  fetch(): Promise<ChannelInterface[]> {
    return this.httpClient.get<{ channels: ChannelInterface[] }>(this.url('/channel/getAllChannel'))
      .toPromise()
      .then(response => response.channels);
  }


  delete(item: ChannelInterface): Promise<{ deleteResult: string }> {
    return this.httpClient.post<{ deleteResult: string }>(this.url('/channel/deleteChannel'), {}, {
      params: {
        channelId: item.id.toString()
      }
    }).toPromise();
  }
}
