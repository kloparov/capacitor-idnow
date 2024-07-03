import { PluginListenerHandle } from "@capacitor/core";
export interface IDnowPlugin {
    /**
     *
     * @param { IdnowOptions } options
     *
     *  SDK initialization functions so we can set properly language and future properties.
     *
     */
    initialize(options: IdnowOptions): Promise<void>;
    /**
    * SDK SartIdent override
    *
    *
    * @param { IdnowIdentOptions } options
    *
    *  Contains a unique Ident-ID is created for each identification process and is specific to you.
    *  Your Ident-ID is composed of 8 letters with the format ABC-DEFGH.
    *  If you have problems with your Ident-ID, please contact the partner that supplied this to you.
    *
    */
    sartIdent(options: IdnowIdentOptions): Promise<void>;
    addListener(eventName: 'finished', listenerFunc: (event: IDnowResult) => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'error', listenerFunc: (event: IDnowResult) => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'cancelled', listenerFunc: (event: IDnowResult) => void): Promise<PluginListenerHandle>;
    /**
     * Check camera permission.
     *
     * Only available on Android and iOS.
     *
     * @since 0.0.1
     */
    checkPermissions(): Promise<PermissionStatus>;
    /**
     * Request camera permission.
     *
     * Only available on Android and iOS.
     *
     * @since 0.0.1
     */
    requestPermissions(): Promise<PermissionStatus>;
    removeAllListeners(): Promise<void>;
}
export interface IdnowOptions {
    language: LanguageCode;
}
export interface IdnowIdentOptions {
    id: string;
}
export declare class IDnowResult {
    private type;
    private code;
    constructor(t: IdNowResultType, c: IdNowResultCode);
    getResultType(): IdNowResultType;
    getStatusCode(): string;
}
export declare enum IdNowResultType {
    FINISHED = 0,
    ERROR = 1,
    CANCELLED = 2
}
/**
 *  For E102 it is recommended to create another ident, and restart the process with the new ident code.
 *  For E103 it is recommended to show a screen to the user with the message that they have submitted all info needed and that they should wait for the final result.
 *  For E170 it is recommended to notify the user that the ident process timed out or was started on a different device and ask them to try again.
 *  E180 is to alert the host app if the context has been lost (OS restarted/killed SDK process).
 *  For all other error codes it is recommended to show a generic error for the user and ask them to try again by restarting the process.
 */
export declare enum IdNowResultCode {
    IdentCodeSyntaxIncorrect = "E100",
    IdentCodeNotFound = "E101",
    IdentCodeExpired = "E102",
    IdentCodeAlreadyCompleted = "E103",
    GetIdentInfoFailedInvalidResponse = "E110",
    GetIdentInfoFailedServerReachability = "E111",
    GetIdentResourcesFailedInvalidResponse = "E130",
    GetIdentResourcesFailedServerReachability = "E131",
    GetNameFailedInvalidResponse = "E140",
    GetNameFailedServerReachability = "E141",
    GetNameFailedFullNameMissing = "E142",
    StartIdentFailedInvalidResponse = "E150",
    StartIdentFailedServerReachability = "E151",
    StartIdentFailedMissingSessionKey = "E152",
    StartIdentFailedWrongIdentMethod = "E153",
    GetEmiratesNFCResourcesFailedInvalidResponse = "E160",
    GetEmiratesNFCResourcesFailedServerReachability = "E161",
    SocketConnectionForceClosed = "E170",
    ProcessForceClosed = "E171",
    MissingApplicationContext = "E180"
}
export declare enum LanguageCode {
    Bulgarian = "bg",
    Czech = "cs",
    Danish = "da",
    German = "de",
    Greek = "el",
    English = "en",
    Spanish = "es",
    Estonian = "et",
    Finnish = "fi",
    French = "fr",
    Croatian = "hr",
    Hungarian = "hu",
    Italian = "it",
    Japanese = "ja",
    Georgian = "ka",
    Korean = "ko",
    Lithuanian = "lt",
    Latvian = "lv",
    Norwegian = "nb",
    Dutch = "nl",
    Polish = "pl",
    Portuguese = "pt",
    Romanian = "ro",
    Russian = "ru",
    Slovak = "sk",
    Slovenian = "sl",
    Serbian = "sr",
    Swedish = "sv",
    Turkish = "tr",
    Chinese = "zh"
}
