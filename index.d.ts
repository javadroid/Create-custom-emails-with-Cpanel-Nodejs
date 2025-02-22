declare module "create-emails" {
    export function createEmailCpanel(
      options: { domain: string; email: string; password: string,quota:number },
      auth: { username: string; password: string,cpanelHost:string }
    ): Promise<{data:any,errors:any,messages:any,status:any}>;
  }
  