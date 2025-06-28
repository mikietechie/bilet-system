# NotesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**notesControllerCreate**](#notescontrollercreate) | **POST** /api/v1/notes | |
|[**notesControllerFindAll**](#notescontrollerfindall) | **GET** /api/v1/notes | |
|[**notesControllerFindAllByOwner**](#notescontrollerfindallbyowner) | **GET** /api/v1/notes/mine | |
|[**notesControllerFindOne**](#notescontrollerfindone) | **GET** /api/v1/notes/{id} | |
|[**notesControllerRemove**](#notescontrollerremove) | **DELETE** /api/v1/notes/{id} | |
|[**notesControllerUpdate**](#notescontrollerupdate) | **PATCH** /api/v1/notes/{id} | |

# **notesControllerCreate**
> number notesControllerCreate(createNoteDto)


### Example

```typescript
import {
    NotesApi,
    Configuration,
    CreateNoteDto
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let createNoteDto: CreateNoteDto; //

const { status, data } = await apiInstance.notesControllerCreate(
    createNoteDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createNoteDto** | **CreateNoteDto**|  | |


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

# **notesControllerFindAll**
> Array<Note> notesControllerFindAll()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

const { status, data } = await apiInstance.notesControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Note>**

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

# **notesControllerFindAllByOwner**
> Array<Note> notesControllerFindAllByOwner()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

const { status, data } = await apiInstance.notesControllerFindAllByOwner();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Note>**

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

# **notesControllerFindOne**
> Note notesControllerFindOne()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.notesControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Note**

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

# **notesControllerRemove**
> notesControllerRemove()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.notesControllerRemove(
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

# **notesControllerUpdate**
> Note notesControllerUpdate(updateNoteDto)


### Example

```typescript
import {
    NotesApi,
    Configuration,
    UpdateNoteDto
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let id: number; // (default to undefined)
let updateNoteDto: UpdateNoteDto; //

const { status, data } = await apiInstance.notesControllerUpdate(
    id,
    updateNoteDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateNoteDto** | **UpdateNoteDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Note**

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

