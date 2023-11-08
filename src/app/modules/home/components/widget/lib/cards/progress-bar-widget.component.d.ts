import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { DatePipe } from '@angular/common';
import { ColorProcessor, ComponentStyle } from '@shared/models/widget-settings.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { ProgressBarLayout, ProgressBarWidgetSettings } from './progress-bar-widget.models';
import { ResizeObserver } from '@juggle/resize-observer';
import * as i0 from "@angular/core";
export declare class ProgressBarWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    private date;
    private widgetComponent;
    private renderer;
    private cd;
    progressBarPanel: ElementRef<HTMLElement>;
    progressBarContainer: ElementRef<HTMLElement>;
    progressBarLayout: typeof ProgressBarLayout;
    settings: ProgressBarWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    layout: ProgressBarLayout;
    layoutClass: string;
    showTitleValueRow: boolean;
    titleValueRowClass: string;
    showValue: boolean;
    valueText: string;
    valueStyle: ComponentStyle;
    valueColor: ColorProcessor;
    barWidth: string;
    barColor: ColorProcessor;
    showTicks: boolean;
    ticksStyle: ComponentStyle;
    value: number;
    backgroundStyle: ComponentStyle;
    overlayStyle: ComponentStyle;
    progressBarPanelResize$: ResizeObserver;
    private decimals;
    private units;
    constructor(date: DatePipe, widgetComponent: WidgetComponent, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarWidgetComponent, "tb-progress-bar-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}