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

  addListener(
    eventName: 'finished',
    listenerFunc: (event: IDnowResult) => void,
  ): Promise<PluginListenerHandle>;

  addListener(
    eventName: 'error',
    listenerFunc: (event: IDnowResult) => void,
  ): Promise<PluginListenerHandle>;

  addListener(
    eventName: 'cancelled',
    listenerFunc: (event: IDnowResult) => void,
  ): Promise<PluginListenerHandle>;

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

// Start Ident Options
export interface IdnowIdentOptions {
  id: string; // Ident Id equivalent.
}

export class IDnowResult {

  private type!: IdNowResultType;
  private code!: IdNowResultCode;

  constructor(t: IdNowResultType, c: IdNowResultCode) {
    this.type = t;
    this.code = c;
  }

  getResultType(): IdNowResultType {
    return this.type;
  }

  getStatusCode(): string {
    return this.code;
  }
}

export enum IdNowResultType {
  FINISHED,
  ERROR,
  CANCELLED
}

/**
 *  For E102 it is recommended to create another ident, and restart the process with the new ident code.
 *  For E103 it is recommended to show a screen to the user with the message that they have submitted all info needed and that they should wait for the final result.
 *  For E170 it is recommended to notify the user that the ident process timed out or was started on a different device and ask them to try again.
 *  E180 is to alert the host app if the context has been lost (OS restarted/killed SDK process).
 *  For all other error codes it is recommended to show a generic error for the user and ask them to try again by restarting the process.
 */
export enum IdNowResultCode {
  // Ident code syntax incorrect
  IdentCodeSyntaxIncorrect = "E100",
  // Ident code not found
  IdentCodeNotFound = "E101",
  // Ident code expired 
  IdentCodeExpired = "E102",
  // Ident code already completed
  IdentCodeAlreadyCompleted = "E103",
  // Get ident info failed; invalid response
  GetIdentInfoFailedInvalidResponse = "E110",
  // Get ident info failed; server reachability
  GetIdentInfoFailedServerReachability = "E111",
  // Get ident resources failed; invalid response
  GetIdentResourcesFailedInvalidResponse = "E130",
  // Get ident resources failed; server reachability
  GetIdentResourcesFailedServerReachability = "E131",
  // Get name failed; invalid response
  GetNameFailedInvalidResponse = "E140",
  // Get name failed; server reachability
  GetNameFailedServerReachability = "E141",
  // Get name failed; full name missing
  GetNameFailedFullNameMissing = "E142",
  // Start ident failed; invalid response
  StartIdentFailedInvalidResponse = "E150",
  // Start ident failed; server reachability
  StartIdentFailedServerReachability = "E151",
  // Start ident failed; missing session key 
  StartIdentFailedMissingSessionKey = "E152",
  // Start ident failed; wrong ident method 
  StartIdentFailedWrongIdentMethod = "E153",
  // Get Emirates NFC resources failed; invalid response
  GetEmiratesNFCResourcesFailedInvalidResponse = "E160",
  // Get Emirates NFC resources failed; server reachability
  GetEmiratesNFCResourcesFailedServerReachability = "E161",
  // Socket connection force closed
  SocketConnectionForceClosed = "E170",
  // Process force closed
  ProcessForceClosed = "E171",
  // Missing application context
  MissingApplicationContext = "E180"
}

export enum LanguageCode {
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