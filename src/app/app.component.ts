import { Component, ViewChild } from '@angular/core';
import { CronOptions } from "./cron-editor/CronOptions";
import { CronGenComponent } from "./cron-editor/cron-editor.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cronExpression = '15 10 2 * *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: "00:00:00",

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab : true,
    hideSpecificMonthWeekTab : true,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: "standard"
  };

  @ViewChild("croneditor1")
  croneditor1 : CronGenComponent;

  cronFlavorChange() {
    this.croneditor1.options = this.cronOptions;
    this.croneditor1.regenerateCron();
  }
}
