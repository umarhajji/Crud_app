import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../Client';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  displayedColumns: string[] = ["id","fName", "lName", "doB", "address", "Action"];
  client!:Client;
  dataSource!: MatTableDataSource<Client> ;
  clients: Client[] = [];
  data: Client[] = []
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  @ViewChild('input') input!: ElementRef;
  faTimes = faTimes;

  
  constructor(private route: ActivatedRoute , private clientService: ClientService) {

    
   }

  getClients(){
    this.clientService.getClientss()
    .subscribe( {
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while Fetching Records")
      }
    })
  }

  ngOnInit(): void {
     this.getClients();
  
   }
  ngAfterViewInit(){
   // this.data.paginator = this.paginator;
  }
 
 onDelete(client: Client): void{
   this.clients = this.clients.filter(h => h !== client);
   this.clientService.deleteClient(client.id).subscribe({
      next:(res)=>{
        alert("Client Deleted Successfully")
        this.getClients()
      },
      error:()=>{
        alert("Error while Adding Client!")
      }
    })
 }

}
