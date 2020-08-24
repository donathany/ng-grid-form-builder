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
  addType=0;
  rowheight = {};

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

  addOption(form:NgForm, index) {
    if(form.value.label == ""){
      window.alert("Can't leave label empty");
    }
    else {
      // this.formService.blocklist[index].fields.push({type: 0, "label":form.value.label, "placeholder":"placeholder", data:"data"});
      this.formService.blocklist[this.selected].fields[index].options.push({value: form.value.value, viewValue: form.value.viewValue});
      // console.log(this.formService.blocklist[index]);
      // console.log(this.formService.blocklist);
      console.log(form.value);
    }
  }
  removeOption(index) {
    if (this.formService.blocklist[this.selected].fields[index].options.length > 0) {
      this.formService.blocklist[this.selected].fields[index].options.pop();
    }

  }

  onSubmit(form:NgForm, index) {
    // console.log(form.value);
    if(form.value.label == ""){
      window.alert("Can't leave label empty");
    }
    else {

      // this.formService.blocklist[index].fields.push({type: 0, "label":form.value.label, "placeholder":"placeholder", data:"data"});
      this.formService.blocklist[index].fields.push({type: parseInt(form.value.type), label:"label", options: [], placeholder:"placeholder", data:"data"});
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
      console.log(tile.size.rows);
      console.log(tile.done);
    }
  }

  resetForm(form?: NgForm){
    if(form!= null)
      form.resetForm();
    this.formService.b = {
      type: 0,
      label: "",
      options: [],
      placeholder: "",
      data: ""
    }
    this.formService.dp = {
      type: 4,
      label: "",
      placeholder: "",
      data: ""
    }
    this.formService.t = {
      rows: 1,
      cols: 1
    }
    this.formService.o = {
      value: "",
      viewValue: ""
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

    if(this.selected < 0)
    {
      this.selected = 0;
    }

    this.formService.blocklist.push({size:form.value, fields:[], done: false});
    // this.formService.blocklist[Object.keys(this.formService.blocklist).length]=[];
    // console.log(Object.keys(this.formService.blocklist).length)

    console.log(this.formService.blocklist.length);
  }

  removeTile(){
    this.formService.blocklist.pop();

    if (this.selected > this.formService.blocklist.length - 1) {
      this.selected = this.formService.blocklist.length -1;
    }
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
