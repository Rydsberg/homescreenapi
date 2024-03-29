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
import type { VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel } from './VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel';

/**
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel {
    /**
     * The 16-digit Västtrafik gid of the stop point.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     */
    gid: string;
    /**
     * The stop point name.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     */
    name: string;
    /**
     * The platform of the stop point.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     */
    platform?: string | null;
    /**
     * The latitude coordinate of the stop point.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     */
    latitude?: number | null;
    /**
     * The logitude coordinate of the stop point.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     */
    longitude?: number | null;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     */
    stopArea?: VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gid" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gid': json['gid'],
        'name': json['name'],
        'platform': !exists(json, 'platform') ? undefined : json['platform'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'stopArea': !exists(json, 'stopArea') ? undefined : VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelFromJSON(json['stopArea']),
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gid': value.gid,
        'name': value.name,
        'platform': value.platform,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'stopArea': VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModelToJSON(value.stopArea),
    };
}

