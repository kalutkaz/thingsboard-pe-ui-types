import { ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityTypeResource, EntityTypeTranslation } from '@shared/models/entity-type.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
import { EntityComponent } from './entity.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { AddEntityDialogData } from '@home/models/entity/entity-component.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AddEntityDialogComponent extends DialogComponent<AddEntityDialogComponent, BaseData<HasId>> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddEntityDialogData<BaseData<HasId>>;
    dialogRef: MatDialogRef<AddEntityDialogComponent, BaseData<HasId>>;
    private componentFactoryResolver;
    private injector;
    private errorStateMatcher;
    entityComponent: EntityComponent<BaseData<HasId>>;
    detailsForm: FormGroup;
    entitiesTableConfig: EntityTableConfig<BaseData<HasId>>;
    translations: EntityTypeTranslation;
    resources: EntityTypeResource<BaseData<HasId>>;
    entity: BaseData<EntityId>;
    submitted: boolean;
    entityDetailsFormAnchor: TbAnchorComponent;
    constructor(store: Store<AppState>, router: Router, data: AddEntityDialogData<BaseData<HasId>>, dialogRef: MatDialogRef<AddEntityDialogComponent, BaseData<HasId>>, componentFactoryResolver: ComponentFactoryResolver, injector: Injector, errorStateMatcher: ErrorStateMatcher);
    ngOnInit(): void;
    helpLinkId(): string;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddEntityDialogComponent, [null, null, null, null, null, null, { skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddEntityDialogComponent, "tb-add-entity-dialog", never, {}, {}, never, never>;
}