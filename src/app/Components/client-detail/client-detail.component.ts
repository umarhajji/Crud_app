import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
   
import { Client } from 'src/app/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
 
  client!: Client 
  
  

  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute,
    private location: Location
    ) { }

  

  

  ngOnInit(): void {
    this.getClient();
    this.save();

  }

  getClient(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.clientService.getClient(id)
      .subscribe(client => this.client = client)
  }
 goBack(): void{
   this.location.back();
 }

 save(): void {
   if(this.client){
     this.clientService.updateClient(this.client, this.client.id)
      .subscribe({
        next:(res)=>{
          alert("Client Updated Successfully"),
          this.goBack()
        },
        error:()=>{
          alert("Error while Deleting Client!")
        }
      });
   }
 }
}
