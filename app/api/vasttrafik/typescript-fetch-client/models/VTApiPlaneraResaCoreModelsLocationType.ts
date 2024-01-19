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
 * 
 * @export
 */
export const VTApiPlaneraResaCoreModelsLocationType = {
    Unknown: 'unknown',
    Stoparea: 'stoparea',
    Stoppoint: 'stoppoint',
    Address: 'address',
    Pointofinterest: 'pointofinterest',
    Metastation: 'metastation'
} as const;
export type VTApiPlaneraResaCoreModelsLocationType = typeof VTApiPlaneraResaCoreModelsLocationType[keyof typeof VTApiPlaneraResaCoreModelsLocationType];


export function VTApiPlaneraResaCoreModelsLocationTypeFromJSON(json: any): VTApiPlaneraResaCoreModelsLocationType {
    return VTApiPlaneraResaCoreModelsLocationTypeFromJSONTyped(json, false);
}

export function VTApiPlaneraResaCoreModelsLocationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaCoreModelsLocationType {
    return json as VTApiPlaneraResaCoreModelsLocationType;
}

export function VTApiPlaneraResaCoreModelsLocationTypeToJSON(value?: VTApiPlaneraResaCoreModelsLocationType | null): any {
    return value as any;
}
