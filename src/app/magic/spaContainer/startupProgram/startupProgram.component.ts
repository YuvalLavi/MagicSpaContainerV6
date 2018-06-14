///<reference path="../../../_nav.ts"/>
import {
    Component
} from '@angular/core';

import {
  BaseTaskMagicComponent, MgSubformService
} from '@magic-xpa/angular';;

import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector
} from "@magic-xpa/angular";
import {navItems} from '../../../_nav';



@Component({
    selector: 'mga-startupProgram',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./startupProgram.component.css'],
    templateUrl: './startupProgram.component.html',
})


export class startupProgram extends BaseTaskMagicComponent

{
  public navItems = navItems;
  public sidebarMinimized = true;


}
