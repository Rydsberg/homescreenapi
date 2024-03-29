/* tslint:disable */
/* eslint-disable */
/**
 * Planera Resa
 * Sök och planera resor med Västtrafik
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel } from './VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel';

/**
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel {
    /**
     * The 16-digit Västtrafik gid of the stop area.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
     */
    gid?: string | null;
    /**
     * The stop area name.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
     */
    name?: string | null;
    /**
     * The latitude of the stop point.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
     */
    latitude?: number;
    /**
     * The longitude of the stop point.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
     */
    longitude?: number;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
     */
    tariffZone1?: VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel
     */
    tariffZone2?: VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gid': !exists(json, 'gid') ? undefined : json['gid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'tariffZone1': !exists(json, 'tariffZone1') ? undefined : VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSON(json['tariffZone1']),
        'tariffZone2': !exists(json, 'tariffZone2') ? undefined : VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSON(json['tariffZone2']),
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gid': value.gid,
        'name': value.name,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'tariffZone1': VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelToJSON(value.tariffZone1),
        'tariffZone2': VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelToJSON(value.tariffZone2),
    };
}

