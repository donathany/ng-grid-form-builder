import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from './form-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  columns = 3;
  list = [];
  bd = true;
  formName = "";
  selected=0;

  // fieldlist= [1,2,3];

  title = 'form-builder';

  constructor(public formService: FormService) {

  }

  ngOnInit() {
    this.resetForm();
  }

  submitEdit(form:NgForm) {
    console.log(form.value);
  }

  onSubmit(form:NgForm, index) {
    if(form.value.label == ""){
      window.alert("Can't leave label empty");
    }
    else {

      this.formService.blocklist[index].fields.push({"label":form.value.label, "placeholder":"placeholder", data:"data"});
      // console.log(this.formService.blocklist[index]);
      console.log(this.formService.blocklist);
      // console.log(form.value.label);
    }
  }

  deleteField(tile){
    tile.fields.pop();
    tile.done = false;
    console.log("delete");
  }

  checkFull(tile, limit){
    if (tile.fields.length >= limit) {
      tile.done = true;
      console.log(limit);
      console.log(tile.tile.rows);
      console.log(tile.done);
    }
  }

  resetForm(form?: NgForm){
    if(form!= null)
      form.resetForm();
    this.formService.b = {
      label: "",
      placeholder: "",
      data: ""
    }
    this.formService.t = {
      rows: 1,
      cols: 1
    }
  }

  setEdit

  setSelected(i) {
    this.selected=i;
    console.log(this.selected);
  }

  arrayMove(i, n) {
    this.selected=this.formService.array_move(i, n);
    // this.selected=n;
  }

  addTile(form:NgForm) {
    this.formService.blocklist.push({tile:form.value, fields:[], done: false});
    // this.formService.blocklist[Object.keys(this.formService.blocklist).length]=[];
    // console.log(Object.keys(this.formService.blocklist).length)

    console.log(this.formService.blocklist.length);
  }

  removeTile(){
    this.formService.blocklist.pop();
    console.log(this.formService.blocklist.length);
  }

  showBorder(){
    // document.getElementById("mat-grid-tile").style.border = "none";
    // document.getElementById("div").style.backgroundColor = 'blue';
    this.bd = !this.bd;
  }

  showList(formName){
    // console.log(this.formService.blocklist);
    this.formService.outJson(formName);
  }
}
