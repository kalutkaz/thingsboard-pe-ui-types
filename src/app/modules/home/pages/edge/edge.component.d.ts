import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '@home/components/entity/entity.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { EdgeInfo } from '@shared/models/edge.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class EdgeComponent extends EntityComponent<EdgeInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: EdgeInfo;
    protected entitiesTableConfigValue: EntityTableConfig<EdgeInfo>;
    fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    entityType: typeof EntityType;
    edgeScope: 'tenant' | 'customer' | 'customer_user';
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: EdgeInfo, entitiesTableConfigValue: EntityTableConfig<EdgeInfo>, fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    isAssignedToCustomer(entity: EdgeInfo): boolean;
    buildForm(entity: EdgeInfo): FormGroup;
    updateForm(entity: EdgeInfo): void;
    updateFormState(): void;
    onEdgeIdCopied($event: any): void;
    onEdgeInfoCopied(type: string): void;
    private generateRoutingKeyAndSecret;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeComponent, "tb-edge", never, {}, {}, never, never>;
}