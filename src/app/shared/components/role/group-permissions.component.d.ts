import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { PageLink } from '@shared/models/page/page-link';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { GroupPermissionsDatasource } from '@home/models/datasource/group-permissions.datasource';
import { RoleService } from '@core/http/role.service';
import { GroupPermission, GroupPermissionFullInfo } from '@shared/models/group-permission.models';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class GroupPermissionsComponent extends PageComponent implements AfterViewInit, OnInit {
    protected store: Store<AppState>;
    private roleService;
    translate: TranslateService;
    dialog: MatDialog;
    private userPermissionsService;
    private dialogService;
    private cd;
    private elementRef;
    private fb;
    groupPermissionsMode: 'group' | 'registration';
    displayedColumns: string[];
    columnsWidth: {
        [key: string]: string;
    };
    editEnabled: boolean;
    addEnabled: boolean;
    deleteEnabled: boolean;
    isUserGroup: boolean;
    pageLink: PageLink;
    textSearchMode: boolean;
    hidePageSize: boolean;
    dataSource: GroupPermissionsDatasource;
    activeValue: boolean;
    dirtyValue: boolean;
    entityGroupValue: EntityGroupInfo;
    registrationPermissionsValue: Array<GroupPermission>;
    viewsInited: boolean;
    set active(active: boolean);
    set entityGroup(entityGroup: EntityGroupInfo);
    get entityGroup(): EntityGroupInfo;
    set registrationPermissions(registrationPermissions: Array<GroupPermission>);
    get registrationPermissions(): Array<GroupPermission>;
    private readonlyValue;
    get readonly(): boolean;
    set readonly(value: boolean);
    permissionsChanged: EventEmitter<any>;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    textSearch: import("@angular/forms").FormControl<string>;
    private widgetResize$;
    private destroy$;
    constructor(store: Store<AppState>, roleService: RoleService, translate: TranslateService, dialog: MatDialog, userPermissionsService: UserPermissionsService, dialogService: DialogService, cd: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private entityGroupUpdated;
    private registrationPermissionsUpdated;
    updateColumns(): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    resetSortAndFilter(update?: boolean): void;
    onRowClick($event: Event, relation: any): void;
    reloadGroupPermissions(): void;
    addGroupPermission($event: Event): void;
    editGroupPermission($event: Event, groupPermission: GroupPermissionFullInfo): void;
    deleteGroupPermission($event: Event, groupPermission: GroupPermissionFullInfo): void;
    deleteGroupPermissions($event: Event): void;
    openGroupPermissionDialog($event: Event, groupPermission?: GroupPermissionFullInfo): void;
    viewRole($event: Event, groupPermission: GroupPermissionFullInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupPermissionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupPermissionsComponent, "tb-group-permissions", never, { "active": "active"; "entityGroup": "entityGroup"; "registrationPermissions": "registrationPermissions"; "readonly": "readonly"; }, { "permissionsChanged": "permissionsChanged"; }, never, never, false, never>;
}
