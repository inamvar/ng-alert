import { Alert, AlertType } from "./alert";


export class AlertService {


  private _alerts: Alert[];


  constructor() {
    this._alerts = [];
  }

  get alerts() {
    return this._alerts;
  }
  
  success(message: string, hasCloseButton?: boolean, title?: string): void {
    const alert: Alert = {
      title: title || null,
      message: message,
      type: AlertType.SUCCESS,
      hasCloseButton: hasCloseButton || false,
      duration: -1
    };

    this._alerts.push(alert);
  }

  remove(alert: Alert): void {
    const idx = this._alerts.indexOf(alert);
    this._alerts.splice(idx, 1);
  }

}
