import {Component} from 'angular2/core';

@Component({
    selector: 'auction-app',
    templateUrl: 'templates/product.html'
})

export class AppComponent {
    price: number = 0.0;
    socket = null;
    bidValue = '';

    constructor(){
        this.socket = io('http://localhost:8000');
        this.socket.on('priceUpdate', function(data){
            this.price = data;
        }.bind(this));    
    }

    bid(){
        this.socket.emit('bid', this.bidValue);
        this.bidValue = '';
    }
}