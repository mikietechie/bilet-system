# KlassesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**klassesControllerAddMember**](#klassescontrolleraddmember) | **POST** /api/v1/klasses/{kid}/members | |
|[**klassesControllerCreate**](#klassescontrollercreate) | **POST** /api/v1/klasses | |
|[**klassesControllerFindAll**](#klassescontrollerfindall) | **GET** /api/v1/klasses | |
|[**klassesControllerFindAllKlassesByMembership**](#klassescontrollerfindallklassesbymembership) | **GET** /api/v1/klasses/member | |
|[**klassesControllerFindAllKlassesByOwner**](#klassescontrollerfindallklassesbyowner) | **GET** /api/v1/klasses/owned | |
|[**klassesControllerFindOne**](#klassescontrollerfindone) | **GET** /api/v1/klasses/{id} | |
|[**klassesControllerReadMembers**](#klassescontrollerreadmembers) | **GET** /api/v1/klasses/{kid}/members | |
|[**klassesControllerRemove**](#klassescontrollerremove) | **DELETE** /api/v1/klasses/{id} | |
|[**klassesControllerRemoveMember**](#klassescontrollerremovemember) | **DELETE** /api/v1/klasses/{kid}/members/{mid} | |
|[**klassesControllerUpdate**](#klassescontrollerupdate) | **PATCH** /api/v1/klasses/{id} | |
|[**klassesControllerUpdateMember**](#klassescontrollerupdatemember) | **PATCH** /api/v1/klasses/{kid}/members/{mid} | |

# **klassesControllerAddMember**
> number klassesControllerAddMember(addKlassMemberDto)


### Example

```typescript
import {
    KlassesApi,
    Configuration,
    AddKlassMemberDto
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let kid: number; // (default to undefined)
let addKlassMemberDto: AddKlassMemberDto; //

const { status, data } = await apiInstance.klassesControllerAddMember(
    kid,
    addKlassMemberDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addKlassMemberDto** | **AddKlassMemberDto**|  | |
| **kid** | [**number**] |  | defaults to undefined|


### Return type

**number**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerCreate**
> number klassesControllerCreate(createKlassDto)


### Example

```typescript
import {
    KlassesApi,
    Configuration,
    CreateKlassDto
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let createKlassDto: CreateKlassDto; //

const { status, data } = await apiInstance.klassesControllerCreate(
    createKlassDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createKlassDto** | **CreateKlassDto**|  | |


### Return type

**number**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerFindAll**
> Array<Klass> klassesControllerFindAll()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

const { status, data } = await apiInstance.klassesControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Klass>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerFindAllKlassesByMembership**
> Array<Klass> klassesControllerFindAllKlassesByMembership()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

const { status, data } = await apiInstance.klassesControllerFindAllKlassesByMembership();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Klass>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerFindAllKlassesByOwner**
> Array<Klass> klassesControllerFindAllKlassesByOwner()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

const { status, data } = await apiInstance.klassesControllerFindAllKlassesByOwner();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Klass>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerFindOne**
> Klass klassesControllerFindOne()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.klassesControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Klass**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerReadMembers**
> Array<KlassMember> klassesControllerReadMembers()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let kid: number; // (default to undefined)

const { status, data } = await apiInstance.klassesControllerReadMembers(
    kid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kid** | [**number**] |  | defaults to undefined|


### Return type

**Array<KlassMember>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerRemove**
> klassesControllerRemove()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.klassesControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerRemoveMember**
> klassesControllerRemoveMember()


### Example

```typescript
import {
    KlassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let mid: number; // (default to undefined)
let kid: number; // (default to undefined)

const { status, data } = await apiInstance.klassesControllerRemoveMember(
    mid,
    kid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mid** | [**number**] |  | defaults to undefined|
| **kid** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerUpdate**
> Klass klassesControllerUpdate(updateKlassDto)


### Example

```typescript
import {
    KlassesApi,
    Configuration,
    UpdateKlassDto
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let id: number; // (default to undefined)
let updateKlassDto: UpdateKlassDto; //

const { status, data } = await apiInstance.klassesControllerUpdate(
    id,
    updateKlassDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateKlassDto** | **UpdateKlassDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Klass**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **klassesControllerUpdateMember**
> klassesControllerUpdateMember(updateKlassMemberDto)


### Example

```typescript
import {
    KlassesApi,
    Configuration,
    UpdateKlassMemberDto
} from './api';

const configuration = new Configuration();
const apiInstance = new KlassesApi(configuration);

let kid: number; // (default to undefined)
let mid: number; // (default to undefined)
let updateKlassMemberDto: UpdateKlassMemberDto; //

const { status, data } = await apiInstance.klassesControllerUpdateMember(
    kid,
    mid,
    updateKlassMemberDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateKlassMemberDto** | **UpdateKlassMemberDto**|  | |
| **kid** | [**number**] |  | defaults to undefined|
| **mid** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

