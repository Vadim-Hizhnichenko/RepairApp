import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { RepairApiService } from 'src/app/services/repair-api.service';
import { RepairTypeApiService } from 'src/app/services/repair-type-api.service';
import { StatusApiService } from 'src/app/services/status-api.service';

@Component({
  selector: 'app-show-repair',
  templateUrl: './show-repair.component.html',
  styleUrls: ['./show-repair.component.css']
})
export class ShowRepairComponent implements OnInit {

  repairList$! : Observable<any[]>
  repairTypeList$!: Observable<any[]>

  repairTypyList : any = []

  repairTypeMap: Map<number, string> = new Map()
  closeResult: string = ''

  modalTitle = ''
  isActiveAddRepairComponent = false
  repair!: any

  constructor(private repairApiService: RepairApiService,
              private repairTypeApiService : RepairTypeApiService,
              public activeModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.repairList$ = this.repairApiService.getListRepair();
    this.repairTypeList$ = this.repairTypeApiService.getListRepairTypes()
    this.setRepairTypeMap()
  }

  addModel(){
    this.repair = {
      id: 0,
      status: null,
      description: null,
      repairTypeId : null
    }
    this.modalTitle = 'Add New Repair'
    this.isActiveAddRepairComponent = true
  }


  setRepairTypeMap(){
    this.repairTypeApiService.getListRepairTypes().subscribe(data =>{
      this.repairTypyList = data;

      for(let i = 0; i < data.length; i++){
        this.repairTypeMap.set(this.repairTypyList[i].id, this.repairTypyList[i].repairName)
      }
    })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openWindowCustomClass(contentSecond: any) {
    this.modalService.open(contentSecond, { windowClass: 'dark-modal' });
  }
  



  

  


}

