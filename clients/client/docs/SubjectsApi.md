# SubjectsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**subjectsControllerCreate**](#subjectscontrollercreate) | **POST** /api/v1/subjects | |
|[**subjectsControllerFindAll**](#subjectscontrollerfindall) | **GET** /api/v1/subjects | |
|[**subjectsControllerFindNotes**](#subjectscontrollerfindnotes) | **GET** /api/v1/subjects/{id}/notes | |
|[**subjectsControllerFindOne**](#subjectscontrollerfindone) | **GET** /api/v1/subjects/{id} | |
|[**subjectsControllerRemove**](#subjectscontrollerremove) | **DELETE** /api/v1/subjects/{id} | |
|[**subjectsControllerUpdate**](#subjectscontrollerupdate) | **PATCH** /api/v1/subjects/{id} | |

# **subjectsControllerCreate**
> number subjectsControllerCreate(createSubjectDto)


### Example

```typescript
import {
    SubjectsApi,
    Configuration,
    CreateSubjectDto
} from './api';

const configuration = new Configuration();
const apiInstance = new SubjectsApi(configuration);

let createSubjectDto: CreateSubjectDto; //

const { status, data } = await apiInstance.subjectsControllerCreate(
    createSubjectDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSubjectDto** | **CreateSubjectDto**|  | |


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

# **subjectsControllerFindAll**
> Array<Subject> subjectsControllerFindAll()


### Example

```typescript
import {
    SubjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubjectsApi(configuration);

const { status, data } = await apiInstance.subjectsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Subject>**

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

# **subjectsControllerFindNotes**
> Array<Note> subjectsControllerFindNotes()


### Example

```typescript
import {
    SubjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubjectsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.subjectsControllerFindNotes(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Array<Note>**

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

# **subjectsControllerFindOne**
> Subject subjectsControllerFindOne()


### Example

```typescript
import {
    SubjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubjectsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.subjectsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Subject**

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

# **subjectsControllerRemove**
> subjectsControllerRemove()


### Example

```typescript
import {
    SubjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubjectsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.subjectsControllerRemove(
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

# **subjectsControllerUpdate**
> Subject subjectsControllerUpdate(updateSubjectDto)


### Example

```typescript
import {
    SubjectsApi,
    Configuration,
    UpdateSubjectDto
} from './api';

const configuration = new Configuration();
const apiInstance = new SubjectsApi(configuration);

let id: number; // (default to undefined)
let updateSubjectDto: UpdateSubjectDto; //

const { status, data } = await apiInstance.subjectsControllerUpdate(
    id,
    updateSubjectDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSubjectDto** | **UpdateSubjectDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Subject**

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

