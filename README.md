# capacitor-idnow

Capacitor IDnow plugin

## Install

```bash
npm install capacitor-idnow
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`sartIdent(...)`](#sartident)
* [`addListener('finished', ...)`](#addlistenerfinished-)
* [`addListener('error', ...)`](#addlistenererror-)
* [`addListener('cancelled', ...)`](#addlistenercancelled-)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: IdnowOptions) => Promise<void>
```

| Param         | Type                                                  | Description                                                                          |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **`options`** | <code><a href="#idnowoptions">IdnowOptions</a></code> |  SDK initialization functions so we can set properly language and future properties. |

--------------------


### sartIdent(...)

```typescript
sartIdent(options: IdnowIdentOptions) => Promise<void>
```

SDK SartIdent override

| Param         | Type                                                            | Description                                                                                                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#idnowidentoptions">IdnowIdentOptions</a></code> |  Contains a unique Ident-ID is created for each identification process and is specific to you. Your Ident-ID is composed of 8 letters with the format ABC-DEFGH. If you have problems with your Ident-ID, please contact the partner that supplied this to you. |

--------------------


### addListener('finished', ...)

```typescript
addListener(eventName: 'finished', listenerFunc: (event: IDnowResult) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                         |
| ------------------ | -------------------------------------------- |
| **`eventName`**    | <code>'finished'</code>                      |
| **`listenerFunc`** | <code>(event: IDnowResult) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('error', ...)

```typescript
addListener(eventName: 'error', listenerFunc: (event: IDnowResult) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                         |
| ------------------ | -------------------------------------------- |
| **`eventName`**    | <code>'error'</code>                         |
| **`listenerFunc`** | <code>(event: IDnowResult) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('cancelled', ...)

```typescript
addListener(eventName: 'cancelled', listenerFunc: (event: IDnowResult) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                         |
| ------------------ | -------------------------------------------- |
| **`eventName`**    | <code>'cancelled'</code>                     |
| **`listenerFunc`** | <code>(event: IDnowResult) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check camera permission.

Only available on Android and iOS.

**Returns:** <code>Promise&lt;any&gt;</code>

**Since:** 0.0.1

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request camera permission.

Only available on Android and iOS.

**Returns:** <code>Promise&lt;any&gt;</code>

**Since:** 0.0.1

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### Interfaces


#### IdnowOptions

| Prop           | Type                                                  |
| -------------- | ----------------------------------------------------- |
| **`language`** | <code><a href="#languagecode">LanguageCode</a></code> |


#### IdnowIdentOptions

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### LanguageCode

| Members          | Value             |
| ---------------- | ----------------- |
| **`Bulgarian`**  | <code>"bg"</code> |
| **`Czech`**      | <code>"cs"</code> |
| **`Danish`**     | <code>"da"</code> |
| **`German`**     | <code>"de"</code> |
| **`Greek`**      | <code>"el"</code> |
| **`English`**    | <code>"en"</code> |
| **`Spanish`**    | <code>"es"</code> |
| **`Estonian`**   | <code>"et"</code> |
| **`Finnish`**    | <code>"fi"</code> |
| **`French`**     | <code>"fr"</code> |
| **`Croatian`**   | <code>"hr"</code> |
| **`Hungarian`**  | <code>"hu"</code> |
| **`Italian`**    | <code>"it"</code> |
| **`Japanese`**   | <code>"ja"</code> |
| **`Georgian`**   | <code>"ka"</code> |
| **`Korean`**     | <code>"ko"</code> |
| **`Lithuanian`** | <code>"lt"</code> |
| **`Latvian`**    | <code>"lv"</code> |
| **`Norwegian`**  | <code>"nb"</code> |
| **`Dutch`**      | <code>"nl"</code> |
| **`Polish`**     | <code>"pl"</code> |
| **`Portuguese`** | <code>"pt"</code> |
| **`Romanian`**   | <code>"ro"</code> |
| **`Russian`**    | <code>"ru"</code> |
| **`Slovak`**     | <code>"sk"</code> |
| **`Slovenian`**  | <code>"sl"</code> |
| **`Serbian`**    | <code>"sr"</code> |
| **`Swedish`**    | <code>"sv"</code> |
| **`Turkish`**    | <code>"tr"</code> |
| **`Chinese`**    | <code>"zh"</code> |

</docgen-api>
