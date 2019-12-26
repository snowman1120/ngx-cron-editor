ngx-cron-editor
===

An Angular 8 component for building cron expressions graphically.
 

## Demo

A work-in-progress demo can be found [here](https://haavardj.github.io/ngx-cron-editor/)

## Usage

1. Install the npm package:
    ```
    $ npm i ngx-cron-editor -S
    ```

2. Import the module in your own module:

    ```ts
    import { CronEditorModule } from "ngx-cron-editor";

    @NgModule({
        imports: [..., CronEditorModule],
    ...
    })
    export class MyModule {
    }
    ```

3. Use the component in your html code:

    ```html
    <cron-editor [(cron)]="cronExpression"></cron-editor>
    ```

4. That's it, you're done!

## Options

```html
<cron-editor [(cron)]="cronExpression" [options]="cronOptions"></cron-editor>
```

```ts
import { CronOptions } from "cron-editor/cron-editor";

@Component({
    ...
})
export class MyComponent {
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
       hideAdvancedTab: true,
       hideSpecificWeekDayTab : false,
       hideSpecificMonthWeekTab : false,

       use24HourTime: true,
       hideSeconds: false,

       cronFlavor: "quartz" //standard or quartz
    };
}
```

## History

It is a fork of the  vincentjames501's [angular-cron-gen](https://github.com/vincentjames501/angular-cron-gen) for AngularJS 1.5+ and claudiuconstantin's [cron-editor(https://github.com/claudiuconstantin/cron-editor)]. 

**The main additions of this fork is support for Angular 8+ and material design.**


## License:
Licensed under the MIT license
