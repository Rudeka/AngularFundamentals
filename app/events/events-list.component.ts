import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent {
    eventFromList = {
        id: 1,
        name: 'ngConf 2025',
        date: '3/1/2025',
        time: '8am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '123 Main St',
            city: 'Salt Lake City, UT',
            country: 'USA'
        }
    }

    
}