import { KeyValue } from '@angular/common';
import { MenuPositionX } from '@angular/material/menu';
import { QueryParamsHandling } from '@angular/router';
import { SVGIconType } from '../components/svg-icon/svg-icon.model';
import { EMenuLocation } from './index.model';
export interface IMenuItemBase {
    breadcrumbs?: KeyValue<string, string>[];
    breadcrumbsStr?: string;
    hasSub?: boolean;
    icon?: SVGIconType;
    id?: string;
    index?: number;
    isDivider?: boolean;
    isP?: boolean;
    label?: string;
    labelLowerCase?: string;
    link?: string;
    action?: () => any;
    queryParams?: {
        [x: string]: string | number | boolean;
    };
    locations?: Map<EMenuLocation, boolean>;
    parentID?: string;
    submenuPosition?: MenuPositionX;
    systemIcon?: string;
    systemLink?: string;
    isReady?: boolean;
}
export interface IMenuItemRawBase {
    [x: string]: IMenuItemRaw;
}
export interface IMenuItemRaw extends IMenuItemBase {
    subs?: {
        [x: string]: IMenuItemRaw;
    };
}
export interface IMenuItem extends IMenuItemBase {
    canAccess?: boolean;
    expanded?: boolean;
    queryParamsHandling?: QueryParamsHandling;
    subs?: IMenuItem[];
}
export declare class MenuItem implements IMenuItem {
    breadcrumbs?: KeyValue<string, string>[];
    breadcrumbsStr?: string;
    canAccess?: boolean;
    dbID: number;
    disabled: boolean;
    hasButtons: boolean;
    hasSub?: boolean;
    icon: SVGIconType;
    id: string;
    index?: number;
    isDivider?: boolean;
    isP?: boolean;
    label: string;
    labelLowerCase?: string;
    level?: number;
    link: string;
    locations?: Map<EMenuLocation, boolean>;
    parentID: string;
    submenuPosition?: MenuPositionX;
    subs: MenuItem[];
    systemIcon?: string;
    systemLink?: string;
    viewAccess: boolean;
    editAccess: boolean;
    get _editAccess(): boolean;
    set _editAccess(value: boolean);
    get _viewAccess(): boolean;
    set _viewAccess(value: boolean);
    constructor(menuItem: IMenuItem, parent?: IMenuItem);
    toggle(): void;
    toggleView(): void;
    toggleCreate(): void;
    allowEditAllSubMenus(): void;
    disableEditAllSubMenus(): void;
    allowViewAllSubMenus(): void;
    disableViewAllSubMenus(): void;
    toggleEditAllSubMenus(): void;
    toggleViewAllSubMenus(): void;
    allowAuthorization(): void;
    disableAuthorization(): void;
    toggleAuthorization(): void;
}
export declare class MenuItemDivider extends MenuItem {
    constructor();
}
export declare enum EPageBtnID {
    agentCommissions = "PAC8",
    agentCreditNotes = "PACN10",
    agentDocuments = "PAD2",
    agentEndorsements = "PAE3",
    agentLoan = "PAL1",
    agentNotes = "PAN6",
    agentPendingQuotes = "PAPQ11",
    agentPolicies = "PAP7",
    agentProduction = "PAP9",
    agentWebLogIn = "PAWL4",
    agentWorkflows = "PAW5",
    agentCalendar = "PAC6",
    clientCalendar = "PCC11",
    clientDocuments = "PCD12",
    clientEndorsements = "PCE13",
    clientNotes = "PCN14",
    clientOtherBusiness = "PCOB15",
    clientPendingPayments = "PCPP16",
    clientPendingQuotes = "PCPQ17",
    clientPolicies = "PCP18",
    clientRelationships = "PCR19",
    clientUnderwritingEvents = "PCUE20",
    clientWebLogIn = "PCWL21",
    clientWorkflows = "PCW22"
}
