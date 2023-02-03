import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
 
@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private toastr:ToastrService) { }

  registerSuccess(){
    this.toastr.success('Registration Success');
  }
}
