import { Component,OnInit } from '@angular/core';

import { Config } from './config';
// Import des class pour configurer des routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {TaskItem} from "../app/model/task.model";

import {TASK} from "../app/datas/task.data";


@Component({
    selector: 'my-app',
    templateUrl: 'app/vue/index.html',
})
export class AppComponent implements OnInit { 

    ListeTask:TaskItem[] ;

    selectedTask: TaskItem;
    newTask:TaskItem;

    addNewTask(task:TaskItem){
        this.ListeTask.push(task);
        this.resetInput();

    }
    resetInput(){
        this.newTask = {id: 0, name: ''}
    }

    deleteTask(task:TaskItem){
        this.ListeTask.splice(task.id, 1);
    }

     ngOnInit(): void {
          this.resetInput();
         this.ListeTask = TASK;
    }

}
