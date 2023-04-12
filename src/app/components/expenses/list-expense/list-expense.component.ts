import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  rest: number;
  listExpenses : any[] = [];
constructor(private _budgetService: BudgetService){
  this.budget =0;
  this.rest =0;
  this.subscription = this._budgetService.getExpenses().subscribe(data =>{
   this.rest = this.rest - data.quantity;
   this.listExpenses.push(data)
    
  })
}
ngOnInit(): void {
  this.budget = this._budgetService.budget;
  this.rest = this._budgetService.rest;
}
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
applyColor(){
  if(this.budget / 4 > this.rest){
    return 'alert alert-danger';

  }else if(this.budget / 2 > this.rest){
    return 'alert alert-warning';
  }
  else{
    return 'alert alert-secondary';
  }
}
}
