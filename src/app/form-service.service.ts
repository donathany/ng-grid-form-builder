import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver/src/FileSaver';
import { HttpClient } from '@angular/common/http';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';


export interface block {
  label: String;
  placeholder: String;
  data: String;
}

export interface tile {
  rows?: number;
  cols?: number;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  b: block;
  e= [{label:"", placeholder: ""}];
  t: tile;
  // blocklist= [];
  defaultTile = {rows: 1, cols: 1};


  a = {tile: {rows: 4, cols: 1}, fields: [{label:"testlabel",placeholder:"testplaceholder"},{label:"test2label",placeholder:"testplaceholder"}], done:false};
  c = {tile: {rows: 2, cols: 1}, fields: [{label:"otherlabel",placeholder:"testplaceholder"},{label:"other2label",placeholder:"testplaceholder"}], done: false};
  // blocklist= [this.a, this.c];
  blocklist = [{tile: {rows:1, cols: 1}, fields: [{label:"label",placeholder:"placeholder",data:"data"}], done: false}];
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
