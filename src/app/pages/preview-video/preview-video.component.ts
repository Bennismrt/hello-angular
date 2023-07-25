import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html'
})
export class PreviewVideoComponent {
    @Input() content : any = []
    @Input() title : string = '';
    @Input() option : string = '';
    @Input() uploadTitle : string = '';
    @Input() section : string = '';

    index : number = 0;
    selectedUser : any = [];

    ngOnInit(){
    }

    selectedUserPic(idx: number){
      this.selectedUser = this.content.filter((res: any, index: number) => index === idx);
    }

}
