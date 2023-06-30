import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  
  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier', 'delay', options.delay);
    const msj = alertify[options.messageType](message);
    if (options.dismissOthers)
      msj.dismissOthers();
  }
  
  dismiss() {
    alertify.dismissAll();
  }
}
export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  dismissOthers: boolean = false;
  position: Position = Position.TopRight;
  delay: number = 3;
}
export enum MessageType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Message = 'message',
}
export enum Position {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
}
