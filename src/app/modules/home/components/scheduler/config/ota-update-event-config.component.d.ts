import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { OtaUpdateType } from '@shared/models/ota-package.models';
import * as i0 from "@angular/core";
export declare class OtaUpdateEventConfigComponent implements ControlValueAccessor, OnDestroy, OnInit {
    private store;
    private fb;
    private destroy$;
    modelValue: SchedulerEventConfiguration | null;
    updatePackageForm: FormGroup;
    currentGroupType: EntityType;
    packageType: OtaUpdateType;
    profileId: string;
    groupId: string;
    groupAll: boolean;
    schedulerEventType: string;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    private updateModel;
    currentEntity(entity: EntityId | EntityGroupInfo | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaUpdateEventConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtaUpdateEventConfigComponent, "tb-ota-update-event-config", never, { "schedulerEventType": "schedulerEventType"; "disabled": "disabled"; }, {}, never, never>;
}