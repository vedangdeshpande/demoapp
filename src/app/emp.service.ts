import { Injectable } from '@angular/core';
import { EMPLOYEES } from './empdata';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  getEmployee():Observable<Employee[]>{
    const empdata = of(EMPLOYEES)
    this.loggerservice.add('Employees are fetched')
    return empdata
  }

  constructor(private loggerservice:LoggerService) { }
}
