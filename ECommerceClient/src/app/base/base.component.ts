import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {
  constructor(private spinner:NgxSpinnerService) { 

  }

  showSpinner(spinnerType:SpinnerType){
    this.spinner.show(spinnerType);
  }

  hideSpinner(spinnerType:SpinnerType){
    this.spinner.hide(spinnerType);
  }
}

export enum SpinnerType{
  Pacman = 'pacman',
  BallSpinFade = 'ball-spin-fade',
}
