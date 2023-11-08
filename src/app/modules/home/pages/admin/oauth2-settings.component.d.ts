import { OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DomainSchema, MapperConfigType, OAuth2Info, PlatformType } from '@shared/models/oauth2.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { MatChipInputEvent } from '@angular/material/chips';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { OAuth2Service } from '@core/http/oauth2.service';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class OAuth2SettingsComponent extends PageComponent implements OnInit, HasConfirmForm, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private oauth2Service;
    private fb;
    private dialogService;
    private translate;
    private window;
    constructor(store: Store<AppState>, route: ActivatedRoute, oauth2Service: OAuth2Service, fb: UntypedFormBuilder, dialogService: DialogService, translate: TranslateService, window: Window);
    get oauth2ParamsInfos(): UntypedFormArray;
    private URL_REGEXP;
    private DOMAIN_AND_PORT_REGEXP;
    private subscriptions;
    private templates;
    private defaultProvider;
    readonly separatorKeysCodes: number[];
    oauth2SettingsForm: UntypedFormGroup;
    oauth2Info: OAuth2Info;
    clientAuthenticationMethods: string[];
    mapperConfigType: typeof MapperConfigType;
    mapperConfigTypes: string[];
    tenantNameStrategies: string[];
    protocols: DomainSchema[];
    domainSchemaTranslations: Map<DomainSchema, string>;
    platformTypes: PlatformType[];
    platformTypeTranslations: Map<PlatformType, string>;
    templateProvider: string[];
    private loginProcessingUrl;
    private static validateScope;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initTemplates;
    private formBasicGroup;
    private formCustomGroup;
    private buildOAuth2SettingsForm;
    private initOAuth2Settings;
    private uniqueDomainValidator;
    private uniquePkgNameValidator;
    domainListTittle(control: AbstractControl): string;
    private buildOAuth2ParamsInfoForm;
    private buildDomainInfoForm;
    private buildMobileInfoForm;
    private buildRegistrationForm;
    private setProviderDefaultValue;
    private changeMapperConfigType;
    save(): void;
    confirmForm(): UntypedFormGroup;
    addChipValue(event: MatChipInputEvent, control: AbstractControl, fieldName: string): void;
    removeChipValue(i: number, control: AbstractControl, fieldName: string): void;
    addOAuth2ParamsInfo(): void;
    deleteOAuth2ParamsInfo($event: Event, index: number): void;
    clientRegistrations(control: AbstractControl): UntypedFormArray;
    domainInfos(control: AbstractControl): UntypedFormArray;
    mobileInfos(control: AbstractControl): UntypedFormArray;
    addRegistration(control: AbstractControl): void;
    deleteRegistration($event: Event, control: AbstractControl, index: number): void;
    toggleEditMode(control: AbstractControl, path: string): void;
    getProviderName(controller: AbstractControl): string;
    isCustomProvider(controller: AbstractControl): boolean;
    getHelpLink(controller: AbstractControl): string;
    addDomainInfo(control: AbstractControl): void;
    removeDomainInfo($event: Event, control: AbstractControl, index: number): void;
    addMobileInfo(control: AbstractControl): void;
    removeMobileInfo($event: Event, control: AbstractControl, index: number): void;
    redirectURI(control: AbstractControl, schema?: DomainSchema): string;
    redirectURIMixed(control: AbstractControl): string;
    trackByParams(index: number): number;
    trackByItem(i: any, item: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2SettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OAuth2SettingsComponent, "tb-oauth2-settings", never, {}, {}, never, never, false, never>;
}
