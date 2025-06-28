# ListsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listsControllerCreate**](#listscontrollercreate) | **POST** /api/v1/lists | |
|[**listsControllerFindAll**](#listscontrollerfindall) | **GET** /api/v1/lists | |
|[**listsControllerFindAllListsByOwner**](#listscontrollerfindalllistsbyowner) | **GET** /api/v1/lists/owned | |
|[**listsControllerFindAllQuestions**](#listscontrollerfindallquestions) | **GET** /api/v1/lists/{id}/questions | |
|[**listsControllerFindOne**](#listscontrollerfindone) | **GET** /api/v1/lists/{id} | |
|[**listsControllerRemove**](#listscontrollerremove) | **DELETE** /api/v1/lists/{id} | |
|[**listsControllerUpdate**](#listscontrollerupdate) | **PATCH** /api/v1/lists/{id} | |

# **listsControllerCreate**
> number listsControllerCreate(createListDto)


### Example

```typescript
import {
    ListsApi,
    Configuration,
    CreateListDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let createListDto: CreateListDto; //

const { status, data } = await apiInstance.listsControllerCreate(
    createListDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createListDto** | **CreateListDto**|  | |


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

# **listsControllerFindAll**
> Array<List> listsControllerFindAll()


### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.listsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<List>**

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

# **listsControllerFindAllListsByOwner**
> Array<List> listsControllerFindAllListsByOwner()


### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.listsControllerFindAllListsByOwner();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<List>**

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

# **listsControllerFindAllQuestions**
> Array<Question> listsControllerFindAllQuestions()


### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.listsControllerFindAllQuestions(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Array<Question>**

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

# **listsControllerFindOne**
> List listsControllerFindOne()


### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.listsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**List**

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

# **listsControllerRemove**
> listsControllerRemove()


### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.listsControllerRemove(
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

# **listsControllerUpdate**
> List listsControllerUpdate(updateListDto)


### Example

```typescript
import {
    ListsApi,
    Configuration,
    UpdateListDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let id: number; // (default to undefined)
let updateListDto: UpdateListDto; //

const { status, data } = await apiInstance.listsControllerUpdate(
    id,
    updateListDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateListDto** | **UpdateListDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**List**

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

