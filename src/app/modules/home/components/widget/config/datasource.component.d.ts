import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { Datasource, DatasourceType, JsonSettingsSchema, Widget, widgetType } from '@shared/models/widget.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { IAliasController } from '@core/api/widget-api.models';
import { EntityAliasSelectCallbacks } from '@home/components/alias/entity-alias-select.component.models';
import { FilterSelectCallbacks } from '@home/components/filter/filter-select.component.models';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import { EntityType } from '@shared/models/entity-type.models';
import { DatasourcesComponent } from '@home/components/widget/config/datasources.component';
import * as i0 from "@angular/core";
export declare class DatasourceComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private datasourcesComponent;
    private widgetConfigComponent;
    get basicMode(): boolean;
    get widgetType(): widgetType;
    get aliasController(): IAliasController;
    get entityAliasSelectCallbacks(): EntityAliasSelectCallbacks;
    get filterSelectCallbacks(): FilterSelectCallbacks;
    get dataKeysCallbacks(): DataKeysCallbacks;
    get hasAdditionalLatestDataKeys(): boolean;
    get dataKeysOptional(): boolean;
    get maxDataKeys(): number;
    get dataKeySettingsSchema(): JsonSettingsSchema;
    get dataKeySettingsDirective(): string;
    get latestDataKeySettingsSchema(): JsonSettingsSchema;
    get latestDataKeySettingsDirective(): string;
    get dashboard(): Dashboard;
    get widget(): Widget;
    get hideDataKeyLabel(): boolean;
    get hideDataKeyColor(): boolean;
    get hideDataKeyUnits(): boolean;
    get hideDataKeyDecimals(): boolean;
    get hideDataKeys(): boolean;
    disabled: boolean;
    widgetTypes: typeof widgetType;
    entityType: typeof EntityType;
    datasourceType: typeof DatasourceType;
    datasourceTypes: Array<DatasourceType>;
    datasourceTypesTranslations: Map<DatasourceType, string>;
    datasourceFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, datasourcesComponent: DatasourcesComponent, widgetConfigComponent: WidgetConfigComponent);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    writeValue(datasource?: Datasource): void;
    validate(c: UntypedFormControl): {
        datasource: {
            valid: boolean;
        };
    };
    isDataKeysOptional(type?: DatasourceType): boolean;
    private datasourceUpdated;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatasourceComponent, [null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatasourceComponent, "tb-datasource", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
