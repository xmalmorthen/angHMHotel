import { Component, OnInit } from '@angular/core';
import { HmgroupService } from '../../services/hmgroup.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public hmgroupService: HmgroupService) { 

    console.log(hmgroupService);

  }

  ngOnInit() {
  }

}
