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
 * Unit of duration of validity of a single punch.
 * @export
 */
export const VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel = {
    Hours: 'hours'
} as const;
export type VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel = typeof VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel[keyof typeof VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel];


export function VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel {
    return VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel {
    return json as VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel;
}

export function VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel | null): any {
    return value as any;
}

