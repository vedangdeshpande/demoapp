import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'child-counter-component',
    template: `<h2>Display counter in child</h2> 
                <br> <button (click)="increment()">increment</button> 
                <button (click)="decrement()">decrement</button> 
                <br>current count is {{count}}`
    // template:`<h2>Display counter in child</h2>
    //             Current count is {{count}}`
})

export class ChildCounterComponent {
    // count:number = 0
    @Input() count:number = 0
    @Output() counterChanged:EventEmitter<number> = new EventEmitter()

    increment(){
        this.count++
        this.counterChanged.emit(this.count)
    }

    decrement(){
        this.count--
        this.counterChanged.emit(this.count)
    }
}