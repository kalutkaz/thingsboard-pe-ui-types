import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeviceConnectivityProtocol } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import * as i0 from "@angular/core";
export declare class GeneralSettingsComponent extends PageComponent implements HasConfirmForm, OnDestroy {
    protected store: Store<AppState>;
    private adminService;
    fb: FormBuilder;
    generalSettings: FormGroup;
    deviceConnectivitySettingsForm: FormGroup;
    protocol: DeviceConnectivityProtocol;
    private adminSettings;
    private deviceConnectivitySettings;
    private readonly destroy$;
    constructor(store: Store<AppState>, adminService: AdminService, fb: FormBuilder);
    ngOnDestroy(): void;
    private buildGeneralServerSettingsForm;
    private buildDeviceConnectivitySettingsForm;
    private buildDeviceConnectivityInfoForm;
    save(): void;
    saveDeviceConnectivitySettings(): void;
    discardGeneralSettings(): void;
    discardDeviceConnectivitySettings(): void;
    private processGeneralSettings;
    private processDeviceConnectivitySettings;
    confirmForm(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeneralSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeneralSettingsComponent, "tb-general-settings", never, {}, {}, never, never, false, never>;
}
