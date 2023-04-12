import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent {
quantity:number;
incorrectQuantity: boolean;
constructor(private _budgetServices: BudgetService, private router: Router ){
  this.quantity=0;
  this.incorrectQuantity=false;

}
add(){
  if(this.quantity > 0){
this.incorrectQuantity= false;
this._budgetServices.budget = this.quantity;
this._budgetServices.rest= this.quantity;
this.router.navigate(['/expenses']);
  }else{
    this.incorrectQuantity = true;
  }
}
}
