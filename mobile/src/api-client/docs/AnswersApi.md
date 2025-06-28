# AnswersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**answersControllerCreate**](#answerscontrollercreate) | **POST** /api/v1/answers | |
|[**answersControllerFindAll**](#answerscontrollerfindall) | **GET** /api/v1/answers | |
|[**answersControllerFindOne**](#answerscontrollerfindone) | **GET** /api/v1/answers/{id} | |
|[**answersControllerRemove**](#answerscontrollerremove) | **DELETE** /api/v1/answers/{id} | |
|[**answersControllerUpdate**](#answerscontrollerupdate) | **PATCH** /api/v1/answers/{id} | |

# **answersControllerCreate**
> number answersControllerCreate(createAnswerDto)


### Example

```typescript
import {
    AnswersApi,
    Configuration,
    CreateAnswerDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AnswersApi(configuration);

let createAnswerDto: CreateAnswerDto; //

const { status, data } = await apiInstance.answersControllerCreate(
    createAnswerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAnswerDto** | **CreateAnswerDto**|  | |


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

# **answersControllerFindAll**
> Array<Answer> answersControllerFindAll()


### Example

```typescript
import {
    AnswersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnswersApi(configuration);

const { status, data } = await apiInstance.answersControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Answer>**

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

# **answersControllerFindOne**
> Answer answersControllerFindOne()


### Example

```typescript
import {
    AnswersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnswersApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.answersControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Answer**

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

# **answersControllerRemove**
> answersControllerRemove()


### Example

```typescript
import {
    AnswersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnswersApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.answersControllerRemove(
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

# **answersControllerUpdate**
> Answer answersControllerUpdate(updateAnswerDto)


### Example

```typescript
import {
    AnswersApi,
    Configuration,
    UpdateAnswerDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AnswersApi(configuration);

let id: number; // (default to undefined)
let updateAnswerDto: UpdateAnswerDto; //

const { status, data } = await apiInstance.answersControllerUpdate(
    id,
    updateAnswerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAnswerDto** | **UpdateAnswerDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Answer**

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

