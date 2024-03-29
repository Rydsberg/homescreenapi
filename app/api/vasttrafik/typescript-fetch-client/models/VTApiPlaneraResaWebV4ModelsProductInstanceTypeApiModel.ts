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
 * Specifies whether or not the product is dynamically based on the journey route.
 * @export
 */
export const VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel = {
    Static: 'static',
    Dynamic: 'dynamic'
} as const;
export type VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel = typeof VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel[keyof typeof VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel];


export function VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel {
    return VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel {
    return json as VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel;
}

export function VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel | null): any {
    return value as any;
}

