import { AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttributeService } from '@core/http/attribute.service';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { LegendData } from '@shared/models/widget.models';
import { PageLink } from '@shared/models/page/page-link';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as i0 from "@angular/core";
export declare class GatewayStatisticsComponent implements AfterViewInit {
    private fb;
    private attributeService;
    private utils;
    sort: MatSort;
    statisticChart: ElementRef;
    ctx: WidgetContext;
    general: boolean;
    isNumericData: boolean;
    dataTypeDefined: boolean;
    chartInited: boolean;
    private flot;
    private flotCtx;
    statisticForm: FormGroup;
    statisticsKeys: any[];
    commands: any[];
    commandObj: any;
    dataSource: MatTableDataSource<any>;
    pageLink: PageLink;
    private resize$;
    private subscription;
    private subscriptionInfo;
    legendData: LegendData;
    displayedColumns: Array<string>;
    private subscriptionOptions;
    constructor(fb: FormBuilder, attributeService: AttributeService, utils: UtilsService);
    ngAfterViewInit(): void;
    sortData(): void;
    onLegendKeyHiddenChange(index: number): void;
    private createChartsSubscription;
    private createGeneralChartsSubscription;
    private init;
    private updateChart;
    private resize;
    private reset;
    private onDataUpdateError;
    private onDataUpdated;
    private initChart;
    private isDataOnlyNumbers;
    private changeSubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayStatisticsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayStatisticsComponent, "tb-gateway-statistics", never, { "ctx": "ctx"; "general": "general"; }, {}, never, never, false, never>;
}
