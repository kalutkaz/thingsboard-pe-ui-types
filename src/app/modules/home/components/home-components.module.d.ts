import * as i0 from "@angular/core";
import * as i1 from "@home/components/router-tabs.component";
import * as i2 from "@home/components/entity/entities-table.component";
import * as i3 from "@home/components/entity/add-entity-dialog.component";
import * as i4 from "@home/components/details-panel.component";
import * as i5 from "@home/components/entity/entity-details-panel.component";
import * as i6 from "@home/components/entity/entity-details-page.component";
import * as i7 from "@home/components/audit-log/audit-log-table.component";
import * as i8 from "@home/components/audit-log/audit-log-details-dialog.component";
import * as i9 from "@home/components/event/event-content-dialog.component";
import * as i10 from "@home/components/event/event-table-header.component";
import * as i11 from "@home/components/event/event-table.component";
import * as i12 from "@home/components/event/event-filter-panel.component";
import * as i13 from "@home/components/edge/edge-downlink-table-header.component";
import * as i14 from "@home/components/edge/edge-downlink-table.component";
import * as i15 from "@home/components/relation/relation-table.component";
import * as i16 from "@home/components/relation/relation-dialog.component";
import * as i17 from "@home/components/relation/relation-filters.component";
import * as i18 from "@home/components/alarm/alarm-table-header.component";
import * as i19 from "@home/components/alarm/alarm-table.component";
import * as i20 from "@home/components/alarm/alarm-assignee-panel.component";
import * as i21 from "@home/components/alarm/alarm-assignee-select-panel.component";
import * as i22 from "@home/components/attribute/attribute-table.component";
import * as i23 from "@home/components/attribute/add-attribute-dialog.component";
import * as i24 from "@home/components/attribute/edit-attribute-value-panel.component";
import * as i25 from "@home/components/alias/aliases-entity-select-panel.component";
import * as i26 from "@home/components/alias/aliases-entity-select.component";
import * as i27 from "@home/components/alias/aliases-entity-autocomplete.component";
import * as i28 from "@home/components/alias/entity-aliases-dialog.component";
import * as i29 from "@home/components/alias/entity-alias-dialog.component";
import * as i30 from "@home/components/dashboard/dashboard.component";
import * as i31 from "@home/components/widget/widget-container.component";
import * as i32 from "@home/components/widget/widget.component";
import * as i33 from "@home/components/widget/widget-config.component";
import * as i34 from "@home/components/widget/widget-preview.component";
import * as i35 from "@home/components/entity/entity-filter-view.component";
import * as i36 from "@home/components/entity/entity-filter.component";
import * as i37 from "@home/components/widget/action/manage-widget-actions.component";
import * as i38 from "@home/components/widget/action/widget-action-dialog.component";
import * as i39 from "@home/components/widget/action/manage-widget-actions-dialog.component";
import * as i40 from "@home/components/widget/action/custom-action-pretty-resources-tabs.component";
import * as i41 from "@home/components/widget/action/custom-action-pretty-editor.component";
import * as i42 from "@home/components/widget/action/mobile-action-editor.component";
import * as i43 from "@home/components/widget/dialog/custom-dialog-container.component";
import * as i44 from "@home/components/import-export/import-dialog.component";
import * as i45 from "@home/components/import-export/import-dialog-csv.component";
import * as i46 from "@home/components/dashboard/select-target-layout-dialog.component";
import * as i47 from "@home/components/dashboard/select-target-state-dialog.component";
import * as i48 from "@home/components/attribute/add-widget-to-dashboard-dialog.component";
import * as i49 from "@home/components/import-export/table-columns-assignment.component";
import * as i50 from "@home/components/converter/converter-autocomplete.component";
import * as i51 from "@home/components/converter/add-converter-dialog.component";
import * as i52 from "@home/components/role/operation-type-list.component";
import * as i53 from "@home/components/role/resource-type-autocomplete.component";
import * as i54 from "@home/components/role/permission-list.component";
import * as i55 from "@home/components/role/view-role-dialog.component";
import * as i56 from "@home/components/group/group-entities-table.component";
import * as i57 from "@home/components/group/group-entity-tabs.component";
import * as i58 from "@home/components/group/group-entity-table-header.component";
import * as i59 from "@home/components/group/entity-group.component";
import * as i60 from "@home/components/group/entity-group-tabs.component";
import * as i61 from "@home/components/group/entity-group-settings.component";
import * as i62 from "@home/components/group/entity-group-column.component";
import * as i63 from "@home/components/group/entity-group-columns.component";
import * as i64 from "@home/components/group/entity-group-column-dialog.component";
import * as i65 from "@home/components/group/add-group-entity-dialog.component";
import * as i66 from "@home/components/group/group-chips.component";
import * as i67 from "@home/components/group/group-entity-info.component";
import * as i68 from "@home/components/group/owner-and-groups.component";
import * as i69 from "@home/components/group/manage-owner-and-groups-dialog.component";
import * as i70 from "@home/components/role/registration-permissions.component";
import * as i71 from "@home/components/filter/boolean-filter-predicate.component";
import * as i72 from "@home/components/filter/string-filter-predicate.component";
import * as i73 from "@home/components/filter/numeric-filter-predicate.component";
import * as i74 from "@home/components/filter/complex-filter-predicate.component";
import * as i75 from "@home/components/filter/complex-filter-predicate-dialog.component";
import * as i76 from "@home/components/filter/filter-predicate.component";
import * as i77 from "@home/components/filter/filter-predicate-list.component";
import * as i78 from "@home/components/filter/key-filter-list.component";
import * as i79 from "@home/components/filter/key-filter-dialog.component";
import * as i80 from "@home/components/filter/filter-dialog.component";
import * as i81 from "@home/components/filter/filters-dialog.component";
import * as i82 from "@home/components/filter/filter-text.component";
import * as i83 from "@home/components/filter/filters-edit.component";
import * as i84 from "@home/components/filter/filters-edit-panel.component";
import * as i85 from "@home/components/filter/user-filter-dialog.component";
import * as i86 from "@home/components/filter/filter-user-info.component";
import * as i87 from "@home/components/filter/filter-user-info-dialog.component";
import * as i88 from "@home/components/filter/filter-predicate-value.component";
import * as i89 from "@home/components/profile/tenant-profile-autocomplete.component";
import * as i90 from "@home/components/profile/tenant/default-tenant-profile-configuration.component";
import * as i91 from "@home/components/profile/tenant/tenant-profile-configuration.component";
import * as i92 from "@home/components/profile/tenant-profile-data.component";
import * as i93 from "@home/components/profile/tenant-profile.component";
import * as i94 from "@home/components/profile/tenant-profile-dialog.component";
import * as i95 from "@home/components/profile/device-profile-autocomplete.component";
import * as i96 from "@home/components/profile/device/default-device-profile-configuration.component";
import * as i97 from "@home/components/profile/device/device-profile-configuration.component";
import * as i98 from "@home/components/profile/device/default-device-profile-transport-configuration.component";
import * as i99 from "@home/components/profile/device/mqtt-device-profile-transport-configuration.component";
import * as i100 from "@home/components/profile/device/coap-device-profile-transport-configuration.component";
import * as i101 from "@home/components/profile/device/device-profile-transport-configuration.component";
import * as i102 from "@home/components/profile/alarm/create-alarm-rules.component";
import * as i103 from "@home/components/profile/alarm/alarm-rule.component";
import * as i104 from "@home/components/profile/alarm/alarm-rule-condition-dialog.component";
import * as i105 from "@home/components/profile/alarm/alarm-rule-condition.component";
import * as i106 from "@home/components/profile/alarm/device-profile-alarm.component";
import * as i107 from "@home/components/profile/alarm/device-profile-alarms.component";
import * as i108 from "@home/components/profile/device-profile.component";
import * as i109 from "@home/components/profile/device-profile-dialog.component";
import * as i110 from "@home/components/profile/add-device-profile-dialog.component";
import * as i111 from "@home/components/device/device-info-filter.component";
import * as i112 from "@home/components/profile/asset-profile.component";
import * as i113 from "@home/components/profile/asset-profile-dialog.component";
import * as i114 from "@home/components/profile/asset-profile-autocomplete.component";
import * as i115 from "@home/components/rule-chain/rule-chain-autocomplete.component";
import * as i116 from "@home/components/profile/alarm/alarm-schedule-info.component";
import * as i117 from "@home/components/profile/device-profile-provision-configuration.component";
import * as i118 from "@home/components/profile/alarm/alarm-schedule.component";
import * as i119 from "@home/components/profile/alarm/alarm-dynamic-value.component";
import * as i120 from "@home/components/profile/alarm/alarm-duration-predicate-value.component";
import * as i121 from "@home/components/wizard/device-wizard-dialog.component";
import * as i122 from "@home/components/profile/alarm/alarm-schedule-dialog.component";
import * as i123 from "@home/components/profile/alarm/edit-alarm-details-dialog.component";
import * as i124 from "@home/components/sms/sms-provider-configuration.component";
import * as i125 from "@home/components/sms/aws-sns-provider-configuration.component";
import * as i126 from "@home/components/sms/smpp-sms-provider-configuration.component";
import * as i127 from "@home/components/sms/twilio-sms-provider-configuration.component";
import * as i128 from "@home/components/wizard/entity-group-wizard-dialog.component";
import * as i129 from "@home/components/dashboard-page/dashboard-toolbar.component";
import * as i130 from "@home/components/dashboard-page/dashboard-page.component";
import * as i131 from "@home/components/dashboard-page/dashboard-state.component";
import * as i132 from "@home/components/dashboard-page/layout/dashboard-layout.component";
import * as i133 from "@home/components/dashboard-page/edit-widget.component";
import * as i134 from "@home/components/dashboard-page/dashboard-widget-select.component";
import * as i135 from "@home/components/dashboard-page/add-widget-dialog.component";
import * as i136 from "@home/components/dashboard-page/layout/manage-dashboard-layouts-dialog.component";
import * as i137 from "@home/components/dashboard-page/dashboard-settings-dialog.component";
import * as i138 from "@home/components/dashboard-page/states/manage-dashboard-states-dialog.component";
import * as i139 from "@home/components/dashboard-page/states/dashboard-state-dialog.component";
import * as i140 from "@home/components/dashboard-page/dashboard-image-dialog.component";
import * as i141 from "@home/components/widget/dialog/embed-dashboard-dialog.component";
import * as i142 from "@home/components/scheduler/config/ota-update-event-config.component";
import * as i143 from "@home/components/scheduler/config/target-select.component";
import * as i144 from "@home/components/dashboard-page/widget-types-panel.component";
import * as i145 from "@home/components/solution/solution-install-dialog.component";
import * as i146 from "@home/components/profile/queue/tenant-profile-queues.component";
import * as i147 from "@home/components/queue/queue-form.component";
import * as i148 from "@home/components/vc/repository-settings.component";
import * as i149 from "@home/components/vc/version-control.component";
import * as i150 from "@home/components/vc/entity-versions-table.component";
import * as i151 from "@home/components/vc/entity-version-create.component";
import * as i152 from "@home/components/vc/entity-version-restore.component";
import * as i153 from "@home/components/vc/entity-version-diff.component";
import * as i154 from "@home/components/vc/complex-version-create.component";
import * as i155 from "@home/components/vc/entity-types-version-create.component";
import * as i156 from "@home/components/vc/entity-types-version-load.component";
import * as i157 from "@home/components/vc/complex-version-load.component";
import * as i158 from "@home/components/vc/remove-other-entities-confirm.component";
import * as i159 from "@home/components/vc/auto-commit-settings.component";
import * as i160 from "@home/components/vc/owner-entity-group-list.component";
import * as i161 from "@home/components/profile/tenant/rate-limits/rate-limits-details-dialog.component";
import * as i162 from "@home/components/profile/tenant/rate-limits/rate-limits.component";
import * as i163 from "@home/components/profile/tenant/rate-limits/rate-limits-list.component";
import * as i164 from "@home/components/profile/tenant/rate-limits/rate-limits-text.component";
import * as i165 from "@home/components/wizard/integration-wizard-dialog.component";
import * as i166 from "@home/components/converter/converter.component";
import * as i167 from "@home/components/converter/converter-test-dialog.component";
import * as i168 from "@home/components/notification/send-notification-button.component";
import * as i169 from "@angular/common";
import * as i170 from "@app/shared/shared.module";
import * as i171 from "@home/components/shared-home-components.module";
import * as i172 from "@home/dialogs/home-dialogs.module";
import * as i173 from "@home/components/widget/config/widget-config-components.module";
import * as i174 from "@home/components/widget/config/basic/basic-widget-config.module";
import * as i175 from "@home/components/profile/device/lwm2m/lwm2m-profile-components.module";
import * as i176 from "@home/components/profile/device/snmp/snmp-device-profile-transport.module";
import * as i177 from "@home/components/dashboard-page/states/states-controller.module";
import * as i178 from "@home/components/device/device-credentials.module";
import * as i179 from "@home/components/profile/device/common/device-profile-common.module";
import * as i180 from "@home/components/integration/integration-component.module";
export declare class HomeComponentsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeComponentsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HomeComponentsModule, [typeof i1.RouterTabsComponent, typeof i2.EntitiesTableComponent, typeof i3.AddEntityDialogComponent, typeof i4.DetailsPanelComponent, typeof i5.EntityDetailsPanelComponent, typeof i6.EntityDetailsPageComponent, typeof i7.AuditLogTableComponent, typeof i8.AuditLogDetailsDialogComponent, typeof i9.EventContentDialogComponent, typeof i10.EventTableHeaderComponent, typeof i11.EventTableComponent, typeof i12.EventFilterPanelComponent, typeof i13.EdgeDownlinkTableHeaderComponent, typeof i14.EdgeDownlinkTableComponent, typeof i15.RelationTableComponent, typeof i16.RelationDialogComponent, typeof i17.RelationFiltersComponent, typeof i18.AlarmTableHeaderComponent, typeof i19.AlarmTableComponent, typeof i20.AlarmAssigneePanelComponent, typeof i21.AlarmAssigneeSelectPanelComponent, typeof i22.AttributeTableComponent, typeof i23.AddAttributeDialogComponent, typeof i24.EditAttributeValuePanelComponent, typeof i25.AliasesEntitySelectPanelComponent, typeof i26.AliasesEntitySelectComponent, typeof i27.AliasesEntityAutocompleteComponent, typeof i28.EntityAliasesDialogComponent, typeof i29.EntityAliasDialogComponent, typeof i30.DashboardComponent, typeof i31.WidgetContainerComponent, typeof i32.WidgetComponent, typeof i33.WidgetConfigComponent, typeof i34.WidgetPreviewComponent, typeof i35.EntityFilterViewComponent, typeof i36.EntityFilterComponent, typeof i37.ManageWidgetActionsComponent, typeof i38.WidgetActionDialogComponent, typeof i39.ManageWidgetActionsDialogComponent, typeof i40.CustomActionPrettyResourcesTabsComponent, typeof i41.CustomActionPrettyEditorComponent, typeof i42.MobileActionEditorComponent, typeof i43.CustomDialogContainerComponent, typeof i44.ImportDialogComponent, typeof i45.ImportDialogCsvComponent, typeof i46.SelectTargetLayoutDialogComponent, typeof i47.SelectTargetStateDialogComponent, typeof i48.AddWidgetToDashboardDialogComponent, typeof i49.TableColumnsAssignmentComponent, typeof i50.ConverterAutocompleteComponent, typeof i51.AddConverterDialogComponent, typeof i52.OperationTypeListComponent, typeof i53.ResourceTypeAutocompleteComponent, typeof i54.PermissionListComponent, typeof i55.ViewRoleDialogComponent, typeof i56.GroupEntitiesTableComponent, typeof i57.GroupEntityTabsComponent, typeof i58.GroupEntityTableHeaderComponent, typeof i59.EntityGroupComponent, typeof i60.EntityGroupTabsComponent, typeof i61.EntityGroupSettingsComponent, typeof i62.EntityGroupColumnComponent, typeof i63.EntityGroupColumnsComponent, typeof i64.EntityGroupColumnDialogComponent, typeof i65.AddGroupEntityDialogComponent, typeof i66.GroupChipsComponent, typeof i67.GroupEntityInfoComponent, typeof i68.OwnerAndGroupsComponent, typeof i69.ManageOwnerAndGroupsDialogComponent, typeof i70.RegistrationPermissionsComponent, typeof i71.BooleanFilterPredicateComponent, typeof i72.StringFilterPredicateComponent, typeof i73.NumericFilterPredicateComponent, typeof i74.ComplexFilterPredicateComponent, typeof i75.ComplexFilterPredicateDialogComponent, typeof i76.FilterPredicateComponent, typeof i77.FilterPredicateListComponent, typeof i78.KeyFilterListComponent, typeof i79.KeyFilterDialogComponent, typeof i80.FilterDialogComponent, typeof i81.FiltersDialogComponent, typeof i82.FilterTextComponent, typeof i83.FiltersEditComponent, typeof i84.FiltersEditPanelComponent, typeof i85.UserFilterDialogComponent, typeof i86.FilterUserInfoComponent, typeof i87.FilterUserInfoDialogComponent, typeof i88.FilterPredicateValueComponent, typeof i89.TenantProfileAutocompleteComponent, typeof i90.DefaultTenantProfileConfigurationComponent, typeof i91.TenantProfileConfigurationComponent, typeof i92.TenantProfileDataComponent, typeof i93.TenantProfileComponent, typeof i94.TenantProfileDialogComponent, typeof i95.DeviceProfileAutocompleteComponent, typeof i96.DefaultDeviceProfileConfigurationComponent, typeof i97.DeviceProfileConfigurationComponent, typeof i98.DefaultDeviceProfileTransportConfigurationComponent, typeof i99.MqttDeviceProfileTransportConfigurationComponent, typeof i100.CoapDeviceProfileTransportConfigurationComponent, typeof i101.DeviceProfileTransportConfigurationComponent, typeof i102.CreateAlarmRulesComponent, typeof i103.AlarmRuleComponent, typeof i104.AlarmRuleConditionDialogComponent, typeof i105.AlarmRuleConditionComponent, typeof i106.DeviceProfileAlarmComponent, typeof i107.DeviceProfileAlarmsComponent, typeof i108.DeviceProfileComponent, typeof i109.DeviceProfileDialogComponent, typeof i110.AddDeviceProfileDialogComponent, typeof i111.DeviceInfoFilterComponent, typeof i112.AssetProfileComponent, typeof i113.AssetProfileDialogComponent, typeof i114.AssetProfileAutocompleteComponent, typeof i115.RuleChainAutocompleteComponent, typeof i116.AlarmScheduleInfoComponent, typeof i117.DeviceProfileProvisionConfigurationComponent, typeof i118.AlarmScheduleComponent, typeof i119.AlarmDynamicValue, typeof i120.AlarmDurationPredicateValueComponent, typeof i121.DeviceWizardDialogComponent, typeof i122.AlarmScheduleDialogComponent, typeof i123.EditAlarmDetailsDialogComponent, typeof i124.SmsProviderConfigurationComponent, typeof i125.AwsSnsProviderConfigurationComponent, typeof i126.SmppSmsProviderConfigurationComponent, typeof i127.TwilioSmsProviderConfigurationComponent, typeof i128.EntityGroupWizardDialogComponent, typeof i129.DashboardToolbarComponent, typeof i130.DashboardPageComponent, typeof i131.DashboardStateComponent, typeof i132.DashboardLayoutComponent, typeof i133.EditWidgetComponent, typeof i134.DashboardWidgetSelectComponent, typeof i135.AddWidgetDialogComponent, typeof i136.ManageDashboardLayoutsDialogComponent, typeof i137.DashboardSettingsDialogComponent, typeof i138.ManageDashboardStatesDialogComponent, typeof i139.DashboardStateDialogComponent, typeof i140.DashboardImageDialogComponent, typeof i141.EmbedDashboardDialogComponent, typeof i142.OtaUpdateEventConfigComponent, typeof i143.TargetSelectComponent, typeof i144.DisplayWidgetTypesPanelComponent, typeof i145.SolutionInstallDialogComponent, typeof i146.TenantProfileQueuesComponent, typeof i147.QueueFormComponent, typeof i148.RepositorySettingsComponent, typeof i149.VersionControlComponent, typeof i150.EntityVersionsTableComponent, typeof i151.EntityVersionCreateComponent, typeof i152.EntityVersionRestoreComponent, typeof i153.EntityVersionDiffComponent, typeof i154.ComplexVersionCreateComponent, typeof i155.EntityTypesVersionCreateComponent, typeof i156.EntityTypesVersionLoadComponent, typeof i157.ComplexVersionLoadComponent, typeof i158.RemoveOtherEntitiesConfirmComponent, typeof i159.AutoCommitSettingsComponent, typeof i160.OwnerEntityGroupListComponent, typeof i161.RateLimitsDetailsDialogComponent, typeof i162.RateLimitsComponent, typeof i163.RateLimitsListComponent, typeof i164.RateLimitsTextComponent, typeof i165.IntegrationWizardDialogComponent, typeof i166.ConverterComponent, typeof i167.ConverterTestDialogComponent, typeof i168.SendNotificationButtonComponent], [typeof i169.CommonModule, typeof i170.SharedModule, typeof i171.SharedHomeComponentsModule, typeof i172.HomeDialogsModule, typeof i173.WidgetConfigComponentsModule, typeof i174.BasicWidgetConfigModule, typeof i175.Lwm2mProfileComponentsModule, typeof i176.SnmpDeviceProfileTransportModule, typeof i177.StatesControllerModule, typeof i178.DeviceCredentialsModule, typeof i179.DeviceProfileCommonModule, typeof i180.IntegrationComponentModule], [typeof i171.SharedHomeComponentsModule, typeof i1.RouterTabsComponent, typeof i2.EntitiesTableComponent, typeof i3.AddEntityDialogComponent, typeof i4.DetailsPanelComponent, typeof i5.EntityDetailsPanelComponent, typeof i6.EntityDetailsPageComponent, typeof i7.AuditLogTableComponent, typeof i11.EventTableComponent, typeof i13.EdgeDownlinkTableHeaderComponent, typeof i14.EdgeDownlinkTableComponent, typeof i15.RelationTableComponent, typeof i17.RelationFiltersComponent, typeof i19.AlarmTableComponent, typeof i20.AlarmAssigneePanelComponent, typeof i21.AlarmAssigneeSelectPanelComponent, typeof i22.AttributeTableComponent, typeof i26.AliasesEntitySelectComponent, typeof i27.AliasesEntityAutocompleteComponent, typeof i28.EntityAliasesDialogComponent, typeof i29.EntityAliasDialogComponent, typeof i30.DashboardComponent, typeof i31.WidgetContainerComponent, typeof i32.WidgetComponent, typeof i33.WidgetConfigComponent, typeof i34.WidgetPreviewComponent, typeof i35.EntityFilterViewComponent, typeof i36.EntityFilterComponent, typeof i37.ManageWidgetActionsComponent, typeof i38.WidgetActionDialogComponent, typeof i39.ManageWidgetActionsDialogComponent, typeof i40.CustomActionPrettyResourcesTabsComponent, typeof i41.CustomActionPrettyEditorComponent, typeof i42.MobileActionEditorComponent, typeof i43.CustomDialogContainerComponent, typeof i44.ImportDialogComponent, typeof i45.ImportDialogCsvComponent, typeof i49.TableColumnsAssignmentComponent, typeof i46.SelectTargetLayoutDialogComponent, typeof i47.SelectTargetStateDialogComponent, typeof i50.ConverterAutocompleteComponent, typeof i52.OperationTypeListComponent, typeof i53.ResourceTypeAutocompleteComponent, typeof i54.PermissionListComponent, typeof i55.ViewRoleDialogComponent, typeof i56.GroupEntitiesTableComponent, typeof i57.GroupEntityTabsComponent, typeof i58.GroupEntityTableHeaderComponent, typeof i59.EntityGroupComponent, typeof i60.EntityGroupTabsComponent, typeof i61.EntityGroupSettingsComponent, typeof i62.EntityGroupColumnComponent, typeof i63.EntityGroupColumnsComponent, typeof i64.EntityGroupColumnDialogComponent, typeof i65.AddGroupEntityDialogComponent, typeof i66.GroupChipsComponent, typeof i67.GroupEntityInfoComponent, typeof i68.OwnerAndGroupsComponent, typeof i69.ManageOwnerAndGroupsDialogComponent, typeof i70.RegistrationPermissionsComponent, typeof i71.BooleanFilterPredicateComponent, typeof i72.StringFilterPredicateComponent, typeof i73.NumericFilterPredicateComponent, typeof i74.ComplexFilterPredicateComponent, typeof i75.ComplexFilterPredicateDialogComponent, typeof i76.FilterPredicateComponent, typeof i77.FilterPredicateListComponent, typeof i78.KeyFilterListComponent, typeof i79.KeyFilterDialogComponent, typeof i80.FilterDialogComponent, typeof i81.FiltersDialogComponent, typeof i82.FilterTextComponent, typeof i83.FiltersEditComponent, typeof i85.UserFilterDialogComponent, typeof i89.TenantProfileAutocompleteComponent, typeof i92.TenantProfileDataComponent, typeof i93.TenantProfileComponent, typeof i94.TenantProfileDialogComponent, typeof i95.DeviceProfileAutocompleteComponent, typeof i96.DefaultDeviceProfileConfigurationComponent, typeof i97.DeviceProfileConfigurationComponent, typeof i98.DefaultDeviceProfileTransportConfigurationComponent, typeof i99.MqttDeviceProfileTransportConfigurationComponent, typeof i100.CoapDeviceProfileTransportConfigurationComponent, typeof i101.DeviceProfileTransportConfigurationComponent, typeof i102.CreateAlarmRulesComponent, typeof i103.AlarmRuleComponent, typeof i104.AlarmRuleConditionDialogComponent, typeof i105.AlarmRuleConditionComponent, typeof i106.DeviceProfileAlarmComponent, typeof i107.DeviceProfileAlarmsComponent, typeof i108.DeviceProfileComponent, typeof i109.DeviceProfileDialogComponent, typeof i110.AddDeviceProfileDialogComponent, typeof i111.DeviceInfoFilterComponent, typeof i115.RuleChainAutocompleteComponent, typeof i121.DeviceWizardDialogComponent, typeof i112.AssetProfileComponent, typeof i113.AssetProfileDialogComponent, typeof i114.AssetProfileAutocompleteComponent, typeof i116.AlarmScheduleInfoComponent, typeof i118.AlarmScheduleComponent, typeof i119.AlarmDynamicValue, typeof i122.AlarmScheduleDialogComponent, typeof i120.AlarmDurationPredicateValueComponent, typeof i123.EditAlarmDetailsDialogComponent, typeof i117.DeviceProfileProvisionConfigurationComponent, typeof i124.SmsProviderConfigurationComponent, typeof i125.AwsSnsProviderConfigurationComponent, typeof i126.SmppSmsProviderConfigurationComponent, typeof i127.TwilioSmsProviderConfigurationComponent, typeof i128.EntityGroupWizardDialogComponent, typeof i129.DashboardToolbarComponent, typeof i130.DashboardPageComponent, typeof i131.DashboardStateComponent, typeof i132.DashboardLayoutComponent, typeof i133.EditWidgetComponent, typeof i134.DashboardWidgetSelectComponent, typeof i135.AddWidgetDialogComponent, typeof i136.ManageDashboardLayoutsDialogComponent, typeof i137.DashboardSettingsDialogComponent, typeof i138.ManageDashboardStatesDialogComponent, typeof i139.DashboardStateDialogComponent, typeof i140.DashboardImageDialogComponent, typeof i141.EmbedDashboardDialogComponent, typeof i142.OtaUpdateEventConfigComponent, typeof i143.TargetSelectComponent, typeof i144.DisplayWidgetTypesPanelComponent, typeof i145.SolutionInstallDialogComponent, typeof i146.TenantProfileQueuesComponent, typeof i147.QueueFormComponent, typeof i148.RepositorySettingsComponent, typeof i149.VersionControlComponent, typeof i150.EntityVersionsTableComponent, typeof i151.EntityVersionCreateComponent, typeof i152.EntityVersionRestoreComponent, typeof i153.EntityVersionDiffComponent, typeof i154.ComplexVersionCreateComponent, typeof i155.EntityTypesVersionCreateComponent, typeof i156.EntityTypesVersionLoadComponent, typeof i157.ComplexVersionLoadComponent, typeof i158.RemoveOtherEntitiesConfirmComponent, typeof i159.AutoCommitSettingsComponent, typeof i160.OwnerEntityGroupListComponent, typeof i161.RateLimitsDetailsDialogComponent, typeof i162.RateLimitsComponent, typeof i163.RateLimitsListComponent, typeof i164.RateLimitsTextComponent, typeof i165.IntegrationWizardDialogComponent, typeof i168.SendNotificationButtonComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HomeComponentsModule>;
}
