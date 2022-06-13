import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RepairApiService } from 'src/app/services/repair-api.service';
import { RepairTypeApiService } from 'src/app/services/repair-type-api.service';
import { StatusApiService } from 'src/app/services/status-api.service';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css']
})
export class AddRepairComponent implements OnInit {

  repairList$!: Observable<any[]>
  statusList$!: Observable<any[]>
  repairTypeList$!: Observable<any[]>

  constructor(private repairApiService: RepairApiService,
              private repairTypeApiService: RepairTypeApiService,
              private statusApiService: StatusApiService) { }

  ngOnInit(): void {
    this.id = this.repair.id;
    this.status = this.repair.status;
    this.description = this.repair.description;
    this.repairTypeId = this.repairTypeId;
    this.statusList$ = this.statusApiService.getStatusList();
    this.repairList$ = this.repairApiService.getListRepair();
    this.repairTypeList$ = this.repairTypeApiService.getListRepairTypes()
  }

  @Input() repair: any
  repairTypeId!: number
  id = 0
  status = ''
  description = ''

  addNewRepair(){
    let repair = {
      repairTypeId: this.repairTypeId,
      status: this.status,
      description: this.description
    }
    this.repairApiService.addRepair(repair).subscribe()

  }

  updateRepair(){
    let repair = {
      repairTypeId: this.repairTypeId,
      status: this.status,
      description: this.description
    }
    let id = this.id
    this.repairApiService.updateRepair(id,repair).subscribe()
  }
  

  

}
