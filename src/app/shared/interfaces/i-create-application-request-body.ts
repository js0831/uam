import { IApplication } from './i-application';

export interface ICreateApplicationRequestBody {
  application: IApplication;
}

// {
//   "application": {
//     "applicationId": "string",
//     "translateId": {
//       "en": "string",
//       "id": 0,
//       "zhHk": "string"
//     }
//   }
// }