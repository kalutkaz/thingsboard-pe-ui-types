import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityGroupInfo, EntityGroupParams } from '@shared/models/entity-group.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import { CustomerService } from '@core/http/customer.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { UtilsService } from '@core/services/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { EntityType } from '@shared/models/entity-type.models';
import { MatDialog } from '@angular/material/dialog';
export declare class EntityGroupsTableConfig extends EntityTableConfig<EntityGroupInfo> {
    private entityGroupService;
    private customerService;
    private userPermissionsService;
    private broadcast;
    private translate;
    private datePipe;
    private utils;
    private route;
    private router;
    private dialog;
    private homeDialogs;
    private params;
    customerId: string;
    edgeId: string;
    groupType: EntityType;
    constructor(entityGroupService: EntityGroupService, customerService: CustomerService, userPermissionsService: UserPermissionsService, broadcast: BroadcastService, translate: TranslateService, datePipe: DatePipe, utils: UtilsService, route: ActivatedRoute, router: Router, dialog: MatDialog, homeDialogs: HomeDialogsService, params: EntityGroupParams);
    private updateActionCellDescriptors;
    private entityGroupWizard;
    private assignEntityGroupsToEdge;
    private share;
    private makePublic;
    private makePrivate;
    onGroupUpdated(closeDetails?: boolean): void;
    private notifyEntityGroupUpdated;
    private open;
    private unassignEntityGroupFromEdge;
    private unassignEntityGroupsFromEdge;
    private onEntityGroupAction;
    private isEdgeGroup;
}