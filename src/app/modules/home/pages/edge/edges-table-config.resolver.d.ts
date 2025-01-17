import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CellActionDescriptor, EntityColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
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
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { EdgeInfo } from '@shared/models/edge.models';
import { EdgeService } from '@core/http/edge.service';
import { AllEntitiesTableConfigService } from '@home/components/entity/all-entities-table-config.service';
import { AuthUser } from '@shared/models/user.model';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class EdgesTableConfigResolver implements Resolve<EntityTableConfig<EdgeInfo>> {
    private allEntitiesTableConfigService;
    private userPermissionsService;
    private store;
    private broadcast;
    private edgeService;
    private customerService;
    private dialogService;
    private homeDialogs;
    private translate;
    private utils;
    private datePipe;
    private router;
    private dialog;
    constructor(allEntitiesTableConfigService: AllEntitiesTableConfigService<EdgeInfo>, userPermissionsService: UserPermissionsService, store: Store<AppState>, broadcast: BroadcastService, edgeService: EdgeService, customerService: CustomerService, dialogService: DialogService, homeDialogs: HomeDialogsService, translate: TranslateService, utils: UtilsService, datePipe: DatePipe, router: Router, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<EdgeInfo>>;
    configDefaults(config: EntityTableConfig<EdgeInfo>): void;
    configureColumns(authUser: AuthUser, config: EntityTableConfig<EdgeInfo>): Array<EntityColumn<EdgeInfo>>;
    configureEntityFunctions(config: EntityTableConfig<EdgeInfo>): void;
    configureCellActions(authUser: AuthUser, config: EntityTableConfig<EdgeInfo>): Array<CellActionDescriptor<EdgeInfo>>;
    configureGroupActions(config: EntityTableConfig<EdgeInfo>): Array<GroupActionDescriptor<EdgeInfo>>;
    configureAddActions(config: EntityTableConfig<EdgeInfo>): Array<HeaderActionDescriptor>;
    importEdges($event: Event, config: EntityTableConfig<EdgeInfo>): void;
    private openEdge;
    manageUsers($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageAssets($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageDevices($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageEntityViews($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageDashboards($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageSchedulerEvents($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageRuleChains($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    manageIntegrations($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    private navigateToChildEdgePage;
    syncEdge($event: any, edge: EdgeInfo): void;
    openInstructions($event: any, edge: EdgeInfo): void;
    manageOwnerAndGroups($event: Event, edge: EdgeInfo, config: EntityTableConfig<EdgeInfo>): void;
    onEdgeAction(action: EntityAction<EdgeInfo>, config: EntityTableConfig<EdgeInfo>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EdgesTableConfigResolver>;
}
