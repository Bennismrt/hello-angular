import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-people',
  templateUrl: './preview-people.component.html'
})
export class PreviewPeopleComponent {
    @Input() content : any = []
    @Input() title : string = '';
    @Input() option : string = '';
    @Input() uploadTitle : string = '';
    @Input() section : string = '';

    index : number = 0;
    selectedUser : any = [];

    async ngOnInit(){
    }

    selectedUserPic(idx: number){
      this.selectedUser = this.content.filter((res: any, index: number) => index === idx);
    }

}
