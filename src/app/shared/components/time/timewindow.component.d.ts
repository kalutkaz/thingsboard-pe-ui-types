import { ChangeDetectorRef, ElementRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MillisecondsToTimeStringPipe } from '@shared/pipe/milliseconds-to-time-string.pipe';
import { Timewindow } from '@shared/models/time/time.models';
import { DatePipe } from '@angular/common';
import { TimeService } from '@core/services/time.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { Overlay } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class TimewindowComponent implements ControlValueAccessor {
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
    direction: 'left' | 'right';
    tooltipPosition: TooltipPosition;
    disabled: boolean;
    innerValue: Timewindow;
    timewindowDisabled: boolean;
    private propagateChange;
    constructor(overlay: Overlay, translate: TranslateService, timeService: TimeService, millisecondsToTimeStringPipe: MillisecondsToTimeStringPipe, datePipe: DatePipe, cd: ChangeDetectorRef, nativeElement: ElementRef, viewContainerRef: ViewContainerRef);
    toggleTimewindow($event: Event): void;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowComponent, "tb-timewindow", never, { "historyOnly": "historyOnly"; "forAllTimeEnabled": "forAllTimeEnabled"; "alwaysDisplayTypePrefix": "alwaysDisplayTypePrefix"; "quickIntervalOnly": "quickIntervalOnly"; "aggregation": "aggregation"; "timezone": "timezone"; "isToolbar": "isToolbar"; "asButton": "asButton"; "strokedButton": "strokedButton"; "flatButton": "flatButton"; "displayTimewindowValue": "displayTimewindowValue"; "hideLabel": "hideLabel"; "isEdit": "isEdit"; "direction": "direction"; "tooltipPosition": "tooltipPosition"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
