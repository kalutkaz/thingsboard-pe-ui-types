import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DefaultTenantProfileConfiguration } from '@shared/models/tenant.model';
import { RateLimitsType } from './rate-limits/rate-limits.models';
import * as i0 from "@angular/core";
export declare class DefaultTenantProfileConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    defaultTenantProfileConfigurationFormGroup: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    rateLimitsType: typeof RateLimitsType;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DefaultTenantProfileConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultTenantProfileConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultTenantProfileConfigurationComponent, "tb-default-tenant-profile-configuration", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
