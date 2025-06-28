# QuestionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**questionsControllerCreate**](#questionscontrollercreate) | **POST** /questions | |
|[**questionsControllerFindAll**](#questionscontrollerfindall) | **GET** /questions | |
|[**questionsControllerFindOne**](#questionscontrollerfindone) | **GET** /questions/{id} | |
|[**questionsControllerRemove**](#questionscontrollerremove) | **DELETE** /questions/{id} | |
|[**questionsControllerUpdate**](#questionscontrollerupdate) | **PATCH** /questions/{id} | |

# **questionsControllerCreate**
> number questionsControllerCreate(createQuestionDto)


### Example

```typescript
import {
    QuestionsApi,
    Configuration,
    CreateQuestionDto
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let createQuestionDto: CreateQuestionDto; //

const { status, data } = await apiInstance.questionsControllerCreate(
    createQuestionDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createQuestionDto** | **CreateQuestionDto**|  | |


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

# **questionsControllerFindAll**
> string questionsControllerFindAll()


### Example

```typescript
import {
    QuestionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

const { status, data } = await apiInstance.questionsControllerFindAll();
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

# **questionsControllerFindOne**
> Question questionsControllerFindOne()


### Example

```typescript
import {
    QuestionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.questionsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Question**

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

# **questionsControllerRemove**
> questionsControllerRemove()


### Example

```typescript
import {
    QuestionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.questionsControllerRemove(
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

# **questionsControllerUpdate**
> Question questionsControllerUpdate(updateQuestionDto)


### Example

```typescript
import {
    QuestionsApi,
    Configuration,
    UpdateQuestionDto
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let id: number; // (default to undefined)
let updateQuestionDto: UpdateQuestionDto; //

const { status, data } = await apiInstance.questionsControllerUpdate(
    id,
    updateQuestionDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateQuestionDto** | **UpdateQuestionDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Question**

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

