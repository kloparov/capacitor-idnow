export class IDnowResult {
    constructor(t, c) {
        this.type = t;
        this.code = c;
    }
    getResultType() {
        return this.type;
    }
    getStatusCode() {
        return this.code;
    }
}
export var IdNowResultType;
(function (IdNowResultType) {
    IdNowResultType[IdNowResultType["FINISHED"] = 0] = "FINISHED";
    IdNowResultType[IdNowResultType["ERROR"] = 1] = "ERROR";
    IdNowResultType[IdNowResultType["CANCELLED"] = 2] = "CANCELLED";
})(IdNowResultType || (IdNowResultType = {}));
/**
 *  For E102 it is recommended to create another ident, and restart the process with the new ident code.
 *  For E103 it is recommended to show a screen to the user with the message that they have submitted all info needed and that they should wait for the final result.
 *  For E170 it is recommended to notify the user that the ident process timed out or was started on a different device and ask them to try again.
 *  E180 is to alert the host app if the context has been lost (OS restarted/killed SDK process).
 *  For all other error codes it is recommended to show a generic error for the user and ask them to try again by restarting the process.
 */
export var IdNowResultCode;
(function (IdNowResultCode) {
    // Ident code syntax incorrect
    IdNowResultCode["IdentCodeSyntaxIncorrect"] = "E100";
    // Ident code not found
    IdNowResultCode["IdentCodeNotFound"] = "E101";
    // Ident code expired 
    IdNowResultCode["IdentCodeExpired"] = "E102";
    // Ident code already completed
    IdNowResultCode["IdentCodeAlreadyCompleted"] = "E103";
    // Get ident info failed; invalid response
    IdNowResultCode["GetIdentInfoFailedInvalidResponse"] = "E110";
    // Get ident info failed; server reachability
    IdNowResultCode["GetIdentInfoFailedServerReachability"] = "E111";
    // Get ident resources failed; invalid response
    IdNowResultCode["GetIdentResourcesFailedInvalidResponse"] = "E130";
    // Get ident resources failed; server reachability
    IdNowResultCode["GetIdentResourcesFailedServerReachability"] = "E131";
    // Get name failed; invalid response
    IdNowResultCode["GetNameFailedInvalidResponse"] = "E140";
    // Get name failed; server reachability
    IdNowResultCode["GetNameFailedServerReachability"] = "E141";
    // Get name failed; full name missing
    IdNowResultCode["GetNameFailedFullNameMissing"] = "E142";
    // Start ident failed; invalid response
    IdNowResultCode["StartIdentFailedInvalidResponse"] = "E150";
    // Start ident failed; server reachability
    IdNowResultCode["StartIdentFailedServerReachability"] = "E151";
    // Start ident failed; missing session key 
    IdNowResultCode["StartIdentFailedMissingSessionKey"] = "E152";
    // Start ident failed; wrong ident method 
    IdNowResultCode["StartIdentFailedWrongIdentMethod"] = "E153";
    // Get Emirates NFC resources failed; invalid response
    IdNowResultCode["GetEmiratesNFCResourcesFailedInvalidResponse"] = "E160";
    // Get Emirates NFC resources failed; server reachability
    IdNowResultCode["GetEmiratesNFCResourcesFailedServerReachability"] = "E161";
    // Socket connection force closed
    IdNowResultCode["SocketConnectionForceClosed"] = "E170";
    // Process force closed
    IdNowResultCode["ProcessForceClosed"] = "E171";
    // Missing application context
    IdNowResultCode["MissingApplicationContext"] = "E180";
})(IdNowResultCode || (IdNowResultCode = {}));
export var LanguageCode;
(function (LanguageCode) {
    LanguageCode["Bulgarian"] = "bg";
    LanguageCode["Czech"] = "cs";
    LanguageCode["Danish"] = "da";
    LanguageCode["German"] = "de";
    LanguageCode["Greek"] = "el";
    LanguageCode["English"] = "en";
    LanguageCode["Spanish"] = "es";
    LanguageCode["Estonian"] = "et";
    LanguageCode["Finnish"] = "fi";
    LanguageCode["French"] = "fr";
    LanguageCode["Croatian"] = "hr";
    LanguageCode["Hungarian"] = "hu";
    LanguageCode["Italian"] = "it";
    LanguageCode["Japanese"] = "ja";
    LanguageCode["Georgian"] = "ka";
    LanguageCode["Korean"] = "ko";
    LanguageCode["Lithuanian"] = "lt";
    LanguageCode["Latvian"] = "lv";
    LanguageCode["Norwegian"] = "nb";
    LanguageCode["Dutch"] = "nl";
    LanguageCode["Polish"] = "pl";
    LanguageCode["Portuguese"] = "pt";
    LanguageCode["Romanian"] = "ro";
    LanguageCode["Russian"] = "ru";
    LanguageCode["Slovak"] = "sk";
    LanguageCode["Slovenian"] = "sl";
    LanguageCode["Serbian"] = "sr";
    LanguageCode["Swedish"] = "sv";
    LanguageCode["Turkish"] = "tr";
    LanguageCode["Chinese"] = "zh";
})(LanguageCode || (LanguageCode = {}));
//# sourceMappingURL=definitions.js.map