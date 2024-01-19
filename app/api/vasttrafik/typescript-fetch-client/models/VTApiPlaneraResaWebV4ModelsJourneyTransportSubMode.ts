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


/**
 * A subset of TransportMode
 * @export
 */
export const VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode = {
    Vasttagen: 'vasttagen',
    Longdistancetrain: 'longdistancetrain',
    Regionaltrain: 'regionaltrain'
} as const;
export type VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode = typeof VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode[keyof typeof VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode];


export function VTApiPlaneraResaWebV4ModelsJourneyTransportSubModeFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode {
    return VTApiPlaneraResaWebV4ModelsJourneyTransportSubModeFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneyTransportSubModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode {
    return json as VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode;
}

export function VTApiPlaneraResaWebV4ModelsJourneyTransportSubModeToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode | null): any {
    return value as any;
}
