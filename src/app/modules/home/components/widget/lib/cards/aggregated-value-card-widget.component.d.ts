import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { AggregatedValueCardKeyPosition, AggregatedValueCardValue, AggregatedValueCardWidgetSettings } from '@home/components/widget/lib/cards/aggregated-value-card.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { ComponentStyle, DateFormatProcessor } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class AggregatedValueCardWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private cd;
    chartElement: ElementRef;
    valueCardValues: ElementRef<HTMLElement>;
    valueCardValueContainer: ElementRef<HTMLElement>;
    aggregatedValueCardKeyPosition: typeof AggregatedValueCardKeyPosition;
    settings: AggregatedValueCardWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    showSubtitle: boolean;
    subtitle$: Observable<string>;
    subtitleStyle: ComponentStyle;
    subtitleColor: string;
    showValues: boolean;
    values: {
        [key: string]: AggregatedValueCardValue;
    };
    showChart: boolean;
    showDate: boolean;
    dateFormat: DateFormatProcessor;
    dateStyle: ComponentStyle;
    dateColor: string;
    backgroundStyle: ComponentStyle;
    overlayStyle: ComponentStyle;
    private flot;
    private flotDataKey;
    private lastUpdateTs;
    tickMin$: Observable<string>;
    tickMax$: Observable<string>;
    private panelResize$;
    constructor(renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    onLatestDataUpdated(): void;
    onResize(): void;
    onEditModeChanged(): void;
    onDestroy(): void;
    private updateLastUpdateTs;
    private onValueCardValuesResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregatedValueCardWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregatedValueCardWidgetComponent, "tb-aggregated-value-card-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}