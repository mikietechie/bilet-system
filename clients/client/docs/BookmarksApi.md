# BookmarksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bookmarksControllerCreate**](#bookmarkscontrollercreate) | **POST** /api/v1/bookmarks | |
|[**bookmarksControllerFindAll**](#bookmarkscontrollerfindall) | **GET** /api/v1/bookmarks | |
|[**bookmarksControllerFindOne**](#bookmarkscontrollerfindone) | **GET** /api/v1/bookmarks/{id} | |
|[**bookmarksControllerRemove**](#bookmarkscontrollerremove) | **DELETE** /api/v1/bookmarks/{id} | |

# **bookmarksControllerCreate**
> number bookmarksControllerCreate(createBookmarkDto)


### Example

```typescript
import {
    BookmarksApi,
    Configuration,
    CreateBookmarkDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

let createBookmarkDto: CreateBookmarkDto; //

const { status, data } = await apiInstance.bookmarksControllerCreate(
    createBookmarkDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBookmarkDto** | **CreateBookmarkDto**|  | |


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

# **bookmarksControllerFindAll**
> Array<Bookmark> bookmarksControllerFindAll()


### Example

```typescript
import {
    BookmarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

const { status, data } = await apiInstance.bookmarksControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Bookmark>**

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

# **bookmarksControllerFindOne**
> Bookmark bookmarksControllerFindOne()


### Example

```typescript
import {
    BookmarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.bookmarksControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Bookmark**

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

# **bookmarksControllerRemove**
> bookmarksControllerRemove()


### Example

```typescript
import {
    BookmarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.bookmarksControllerRemove(
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

