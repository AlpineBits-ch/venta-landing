import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invite',
  imports: [],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.css',
})
export class InviteComponent implements OnInit{
    ngOnInit(): void {
      location.href = `${location.href.replace('http://localhost:4200/', 'venta://').replace('https://venta.gg/', 'venta://')}`;
    }

}
