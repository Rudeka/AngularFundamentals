
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: `app/events/create-event.component.html`
})
export class CreateEventComponent {
    constructor(private router: Router){}

    isDirty:boolean = true;

    cancel() {
        this.router.navigate(['/events']);
    }
}