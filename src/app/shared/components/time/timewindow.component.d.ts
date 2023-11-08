import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MillisecondsToTimeStringPipe } from '@shared/pipe/milliseconds-to-time-string.pipe';
import { Timewindow } from '@shared/models/time/time.models';
import { DatePipe } from '@angular/common';
import { TimeService } from '@core/services/time.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentStyle, TimewindowStyle } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class TimewindowComponent implements ControlValueAccessor, OnInit, OnChanges {
    private overlay;
    private translate;
    private timeService;
    private millisecondsToTimeStringPipe;
    private datePipe;
    private cd;
    private nativeElement;
    viewContainerRef: ViewContainerRef;
    historyOnlyValue: boolean;
    set historyOnly(val: boolean);
    get historyOnly(): boolean;
    get displayTypePrefix(): boolean;
    noMargin: boolean;
    noPadding: boolean;
    disablePanel: boolean;
    forAllTimeEnabled: boolean;
    alwaysDisplayTypePrefix: boolean;
    quickIntervalOnly: boolean;
    aggregation: boolean;
    timezone: boolean;
    isToolbar: boolean;
    asButton: boolean;
    strokedButton: boolean;
    flatButton: boolean;
    displayTimewindowValue: boolean;
    hideLabel: boolean;
    isEditValue: boolean;
    set isEdit(val: boolean);
    get isEdit(): boolean;
    tooltipPosition: TooltipPosition;
    timewindowStyle: TimewindowStyle;
    disabled: boolean;
    innerValue: Timewindow;
    timewindowDisabled: boolean;
    computedTimewindowStyle: TimewindowStyle;
    timewindowComponentStyle: ComponentStyle;
    timewindowIconStyle: ComponentStyle;
    private propagateChange;
    constructor(overlay: Overlay, translate: TranslateService, timeService: TimeService, millisecondsToTimeStringPipe: MillisecondsToTimeStringPipe, datePipe: DatePipe, cd: ChangeDetectorRef, nativeElement: ElementRef, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggleTimewindow($event: Event): void;
    private updateTimewindowStyle;
    private onHistoryOnlyChanged;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: Timewindow): void;
    notifyChanged(): void;
    displayValue(): string;
    updateDisplayValue(): void;
    private isTimewindowDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowComponent, "tb-timewindow", never, { "historyOnly": "historyOnly"; "noMargin": "noMargin"; "noPadding": "noPadding"; "disablePanel": "disablePanel"; "forAllTimeEnabled": "forAllTimeEnabled"; "alwaysDisplayTypePrefix": "alwaysDisplayTypePrefix"; "quickIntervalOnly": "quickIntervalOnly"; "aggregation": "aggregation"; "timezone": "timezone"; "isToolbar": "isToolbar"; "asButton": "asButton"; "strokedButton": "strokedButton"; "flatButton": "flatButton"; "displayTimewindowValue": "displayTimewindowValue"; "hideLabel": "hideLabel"; "isEdit": "isEdit"; "tooltipPosition": "tooltipPosition"; "timewindowStyle": "timewindowStyle"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
