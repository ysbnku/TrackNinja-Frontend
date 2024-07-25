export interface Logs {
  data: [Log];
}

 export interface Log {
    id: number;
    subUserId: string;
    appDuration: string;
    appName: string;
    date: string;
    timeSpent: string;
  }


  