export interface Alert {
    title: string;
    message: string;
    type: AlertType;
    hasCloseButton: boolean,
    duration: number 
}

export enum AlertType {
    SUCCESS,
    ERROR,
    INFO,
    WARNING
}