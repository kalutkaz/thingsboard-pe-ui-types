import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CellActionDescriptor, EntityTableColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CustomerService } from '@core/http/customer.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { EntityView, EntityViewInfo } from '@app/shared/models/entity-view.models';
import { EntityViewService } from '@core/http/entity-view.service';
import { EntityViewId } from '@shared/models/id/entity-view-id';
import { EdgeService } from '@core/http/edge.service';
import * as i0 from "@angular/core";
export declare class EntityViewsTableConfigResolver implements Resolve<EntityTableConfig<EntityViewInfo>> {
    private store;
    private broadcast;
    private entityViewService;
    private customerService;
    private edgeService;
    private dialogService;
    private translate;
    private datePipe;
    private router;
    private dialog;
    private readonly config;
    private customerId;
    constructor(store: Store<AppState>, broadcast: BroadcastService, entityViewService: EntityViewService, customerService: CustomerService, edgeService: EdgeService, dialogService: DialogService, translate: TranslateService, datePipe: DatePipe, router: Router, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<EntityViewInfo>>;
    configureColumns(entityViewScope: string): Array<EntityTableColumn<EntityViewInfo>>;
    configureEntityFunctions(entityViewScope: string): void;
    configureCellActions(entityViewScope: string): Array<CellActionDescriptor<EntityViewInfo>>;
    configureGroupActions(entityViewScope: string): Array<GroupActionDescriptor<EntityViewInfo>>;
    configureAddActions(entityViewScope: string): Array<HeaderActionDescriptor>;
    addEntityViewsToCustomer($event: Event): void;
    private openEntityView;
    makePublic($event: Event, entityView: EntityView): void;
    assignToCustomer($event: Event, entityViewIds: Array<EntityViewId>): void;
    unassignFromCustomer($event: Event, entityView: EntityViewInfo): void;
    unassignEntityViewsFromCustomer($event: Event, entityViews: Array<EntityViewInfo>): void;
    onEntityViewAction(action: EntityAction<EntityViewInfo>, config: EntityTableConfig<EntityViewInfo>): boolean;
    addEntityViewsToEdge($event: Event): void;
    unassignFromEdge($event: Event, entityView: EntityViewInfo): void;
    unassignEntityViewsFromEdge($event: Event, entityViews: Array<EntityViewInfo>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityViewsTableConfigResolver>;
}