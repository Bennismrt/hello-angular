import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-document',
  templateUrl: './preview-document.component.html'
})
export class PreviewDocumentComponent {
    @Input() content : any = []
    @Input() title : string = '';
    @Input() option : string = '';
    @Input() uploadTitle : string = '';

    index : number = 0;
    selectedUser : any = [];

    async ngOnInit(){
    }

    selectedUserPic(idx: number){
      this.selectedUser = this.content.filter((res: any, index: number) => index === idx);
    }

}
