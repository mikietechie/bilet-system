# TicketsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ticketsControllerCreate**](#ticketscontrollercreate) | **POST** /api/v1/tickets | |
|[**ticketsControllerFindAll**](#ticketscontrollerfindall) | **GET** /api/v1/tickets | |
|[**ticketsControllerFindOne**](#ticketscontrollerfindone) | **GET** /api/v1/tickets/{id} | |
|[**ticketsControllerRemove**](#ticketscontrollerremove) | **DELETE** /api/v1/tickets/{id} | |
|[**ticketsControllerUpdate**](#ticketscontrollerupdate) | **PATCH** /api/v1/tickets/{id} | |

# **ticketsControllerCreate**
> number ticketsControllerCreate(createTicketDto)


### Example

```typescript
import {
    TicketsApi,
    Configuration,
    CreateTicketDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TicketsApi(configuration);

let createTicketDto: CreateTicketDto; //

const { status, data } = await apiInstance.ticketsControllerCreate(
    createTicketDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTicketDto** | **CreateTicketDto**|  | |


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

# **ticketsControllerFindAll**
> string ticketsControllerFindAll()


### Example

```typescript
import {
    TicketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TicketsApi(configuration);

const { status, data } = await apiInstance.ticketsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

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

# **ticketsControllerFindOne**
> Ticket ticketsControllerFindOne()


### Example

```typescript
import {
    TicketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TicketsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.ticketsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Ticket**

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

# **ticketsControllerRemove**
> ticketsControllerRemove()


### Example

```typescript
import {
    TicketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TicketsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.ticketsControllerRemove(
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

# **ticketsControllerUpdate**
> Ticket ticketsControllerUpdate(updateTicketDto)


### Example

```typescript
import {
    TicketsApi,
    Configuration,
    UpdateTicketDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TicketsApi(configuration);

let id: number; // (default to undefined)
let updateTicketDto: UpdateTicketDto; //

const { status, data } = await apiInstance.ticketsControllerUpdate(
    id,
    updateTicketDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTicketDto** | **UpdateTicketDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Ticket**

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

