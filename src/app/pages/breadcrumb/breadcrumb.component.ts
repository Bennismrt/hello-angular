import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
    breadcrumb = [
        {
            name: 'video',
            child: [
                {
                    name : 'elektronik',
                    child: [
                        {
                            name: 'laptop'
                        }
                    ]
                }
            ]
        }
    ]

    arrBreadcrumb: any = [];

    async ngOnInit(){

        await this.getBreadcrumb(this.breadcrumb);

    }

    getBreadcrumb(arrBread: any){
        for(const data of arrBread){
            let payload = {
                name :data.name
            }
            this.arrBreadcrumb.push(payload)
            if(data.child?.length > 0){
                this.getBreadcrumb(data.child)
            }
        }
    }
}
