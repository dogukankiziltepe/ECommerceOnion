import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toaster:ToastrService) { }
  message(title:string, message:string, options:Partial<ToastrOptions>){
    this.toaster[options.messageType](message, title, { positionClass: options.position })
  }
}

export class ToastrOptions{
  messageType: ToastrMessageType = ToastrMessageType.Message;
  position: ToastrPosition = ToastrPosition.TopRight;
}

export enum ToastrMessageType{
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Message = 'message',
  Info = 'info'
}

export enum ToastrPosition{
  TopLeft = 'toast-top-left',
  TopCenter = 'toast-top-center',
  TopRight = 'toast-top-right',
  BottomLeft = 'toast-bottom-left',
  BottomCenter = 'toast-bottom-center',
  BottomRight = 'toast-bottom-right'
}
