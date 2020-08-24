import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver/src/FileSaver';
import { HttpClient } from '@angular/common/http';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';


export interface field {
  type: number;
  label: String;
  options?: Option[];
  placeholder?: String;
  data: String;
}

export interface size {
  rows?: number;
  cols?: number;
  header?: String;
  expand?: number;
}

export interface Option {
  value: string;
  viewValue: string;
}

export interface dateField {
  type: number;
  label: String;
  placeholder?: String;
  data: String;

}

export interface tile {
  size: size;
  fields: field[];
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  b: field;
  o: Option;
  e= [{label:"", placeholder: ""}];
  t: size;
  // blocklist= [];
  defaultsize = {rows: 1, cols: 1};
  g: field = {type: 1, label: "Dropdown", options: [{value: "abc", viewValue: "abc"},{value: "def", viewValue: "def"}], placeholder: "placeholder", data: "data"}
  h: field = {type: 2, label: "Checkbox", placeholder: "placeholder", data: "data"}
  i: field = {type: 3, label: "Checkbox", options: [{value: "abc", viewValue: "abc"},{value: "def", viewValue: "def"}], placeholder: "placeholder", data: "data"}
  dp: field = {type: 4, label: "Date", placeholder: "placeholder", data: "data"}



  // a = {size: {rows: 4, cols: 1}, fields: [{type:0, label:"testlabel",placeholder:"testplaceholder",data:"data"},{type:0, label:"test2label",placeholder:"testplaceholder",data:"data"}], done:false};
  // c = {size: {rows: 2, cols: 1}, fields: [{type:0, label:"otherlabel",placeholder:"testplaceholder",data:"data"},{type:0, label:"other2label",placeholder:"testplaceholder",data:"data"}], done: false};
  // blocklist= [this.a, this.c];
  blocklist: tile[] = [{size: {rows:5, cols: 1}, fields: [{type: 0, label:"label",placeholder:"placeholder",data:"data"}, this.g, this.h], done: false}];
  constructor(private http: HttpClient) { }

  array_move(old_index, new_index) {
    if (new_index >= this.blocklist.length || new_index < 0) {
      new_index = old_index;
    }
    else {
      this.blocklist.splice(new_index, 0, this.blocklist.splice(old_index, 1)[0]);
    }
    // return this.blocklist; // for testing
    return new_index;
};

  outJson(formName){
    // let url = "https://jsonplaceholder.typicode.com/todos/1";
    var blob = new Blob([JSON.stringify(this.blocklist)], {type: "application/json;charset=utf-8"})
    // console.log(JSON.stringify(this.blocklist));
    saveAs(blob, `${formName}.json`);
    // this.http.get(this.bl, {responseType: 'blob'})
    //   .subscribe((res) => {
    //     console.log(res)
    //     saveAs(res, "myfile.json")
    //   })
    }


}
