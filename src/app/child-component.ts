import { Component, Input, OnChanges, SimpleChanges  } from "@angular/core";

@Component({

    selector: 'child-component',
    template: `<h2> Display Counter </h2>
                Current count is {{count}}`
})

export class childComponent{
    private _count = 0

    @Input()
    set count(count:number){
        this._count = count
    }

    get count():number{
        return this._count
    }
}

// export class childComponent implements OnChanges{
//     @Input() count:number = 0

//     ngOnChanges(changes:SimpleChanges){
//         for(let property in changes){
//             if(property == 'count'){
//                 console.log('previous value',changes[property].previousValue)
//                 console.log('current value',changes[property].currentValue)
//                 console.log('first change',changes[property].firstChange)
//             }
//         }
//     }
// }

