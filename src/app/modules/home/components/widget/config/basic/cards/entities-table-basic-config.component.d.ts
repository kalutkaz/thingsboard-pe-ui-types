import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { Datasource } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export declare class EntitiesTableBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    get datasource(): Datasource;
    entitiesTableWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getColumns;
    private setColumns;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesTableBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitiesTableBasicConfigComponent, "tb-entities-table-basic-config", never, {}, {}, never, never, false, never>;
}
