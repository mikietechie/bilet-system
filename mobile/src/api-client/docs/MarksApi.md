# MarksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**marksControllerCreate**](#markscontrollercreate) | **POST** /marks | |
|[**marksControllerFindAll**](#markscontrollerfindall) | **GET** /marks | |
|[**marksControllerFindAllMarksByUser**](#markscontrollerfindallmarksbyuser) | **GET** /marks/my-marks | |
|[**marksControllerFindOne**](#markscontrollerfindone) | **GET** /marks/{id} | |
|[**marksControllerRemove**](#markscontrollerremove) | **DELETE** /marks/{id} | |
|[**marksControllerUpdate**](#markscontrollerupdate) | **PATCH** /marks/{id} | |

# **marksControllerCreate**
> number marksControllerCreate(createMarkDto)


### Example

```typescript
import {
    MarksApi,
    Configuration,
    CreateMarkDto
} from './api';

const configuration = new Configuration();
const apiInstance = new MarksApi(configuration);

let createMarkDto: CreateMarkDto; //

const { status, data } = await apiInstance.marksControllerCreate(
    createMarkDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMarkDto** | **CreateMarkDto**|  | |


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marksControllerFindAll**
> string marksControllerFindAll()


### Example

```typescript
import {
    MarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MarksApi(configuration);

const { status, data } = await apiInstance.marksControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marksControllerFindAllMarksByUser**
> Array<Mark> marksControllerFindAllMarksByUser()


### Example

```typescript
import {
    MarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MarksApi(configuration);

const { status, data } = await apiInstance.marksControllerFindAllMarksByUser();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Mark>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marksControllerFindOne**
> Mark marksControllerFindOne()


### Example

```typescript
import {
    MarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MarksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.marksControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Mark**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marksControllerRemove**
> marksControllerRemove()


### Example

```typescript
import {
    MarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MarksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.marksControllerRemove(
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marksControllerUpdate**
> Mark marksControllerUpdate(updateMarkDto)


### Example

```typescript
import {
    MarksApi,
    Configuration,
    UpdateMarkDto
} from './api';

const configuration = new Configuration();
const apiInstance = new MarksApi(configuration);

let id: number; // (default to undefined)
let updateMarkDto: UpdateMarkDto; //

const { status, data } = await apiInstance.marksControllerUpdate(
    id,
    updateMarkDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMarkDto** | **UpdateMarkDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Mark**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

