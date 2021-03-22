export interface IConfig {
  port: number;
}

export const Config: IConfig = {
  port: parseInt(process.env.PORT, 10)
}