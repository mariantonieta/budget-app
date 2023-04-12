import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css']
})
export class EnterExpenseComponent {
nameExpense: string;
quantity: number;
formIncorrect:boolean;
textIncorrect: string;
constructor(private _budgetServices: BudgetService){

  this.nameExpense = "";
  this.quantity = 0;
  this.formIncorrect = false;
  this.textIncorrect = ""

}
addExpense(){
if(this.quantity > this._budgetServices.rest){
  this.formIncorrect = true;
  this.textIncorrect = "Amount entered is greater than the remaining"
  return
}

  if(this.nameExpense === '' || this.quantity <= 0){
    this.formIncorrect = true;
    this.textIncorrect = "Name amount or expense is incorrect"

  }else{
const expense = {
  name: this.nameExpense,
  quantity: this.quantity
}
this._budgetServices.addExpense(expense)
    this.formIncorrect = false;
    this.nameExpense = '';
    this.quantity = 0;
  }
}
}
