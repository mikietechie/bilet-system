# ExaminationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**examinationsControllerCreate**](#examinationscontrollercreate) | **POST** /api/v1/examinations | |
|[**examinationsControllerFindAll**](#examinationscontrollerfindall) | **GET** /api/v1/examinations | |
|[**examinationsControllerFindAllExaminationsByOwner**](#examinationscontrollerfindallexaminationsbyowner) | **GET** /api/v1/examinations/owned | |
|[**examinationsControllerFindAllMarks**](#examinationscontrollerfindallmarks) | **GET** /api/v1/examinations/{id}/marks | |
|[**examinationsControllerFindOne**](#examinationscontrollerfindone) | **GET** /api/v1/examinations/{id} | |
|[**examinationsControllerRemove**](#examinationscontrollerremove) | **DELETE** /api/v1/examinations/{id} | |
|[**examinationsControllerUpdate**](#examinationscontrollerupdate) | **PATCH** /api/v1/examinations/{id} | |

# **examinationsControllerCreate**
> number examinationsControllerCreate(createExaminationDto)


### Example

```typescript
import {
    ExaminationsApi,
    Configuration,
    CreateExaminationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

let createExaminationDto: CreateExaminationDto; //

const { status, data } = await apiInstance.examinationsControllerCreate(
    createExaminationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createExaminationDto** | **CreateExaminationDto**|  | |


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

# **examinationsControllerFindAll**
> Array<Examination> examinationsControllerFindAll()


### Example

```typescript
import {
    ExaminationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

const { status, data } = await apiInstance.examinationsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Examination>**

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

# **examinationsControllerFindAllExaminationsByOwner**
> Array<Examination> examinationsControllerFindAllExaminationsByOwner()


### Example

```typescript
import {
    ExaminationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

const { status, data } = await apiInstance.examinationsControllerFindAllExaminationsByOwner();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Examination>**

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

# **examinationsControllerFindAllMarks**
> Array<Mark> examinationsControllerFindAllMarks()


### Example

```typescript
import {
    ExaminationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.examinationsControllerFindAllMarks(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Array<Mark>**

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

# **examinationsControllerFindOne**
> Examination examinationsControllerFindOne()


### Example

```typescript
import {
    ExaminationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.examinationsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Examination**

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

# **examinationsControllerRemove**
> examinationsControllerRemove()


### Example

```typescript
import {
    ExaminationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.examinationsControllerRemove(
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

# **examinationsControllerUpdate**
> Examination examinationsControllerUpdate(updateExaminationDto)


### Example

```typescript
import {
    ExaminationsApi,
    Configuration,
    UpdateExaminationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ExaminationsApi(configuration);

let id: number; // (default to undefined)
let updateExaminationDto: UpdateExaminationDto; //

const { status, data } = await apiInstance.examinationsControllerUpdate(
    id,
    updateExaminationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateExaminationDto** | **UpdateExaminationDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Examination**

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

