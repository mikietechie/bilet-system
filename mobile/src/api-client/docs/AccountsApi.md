# AccountsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsControllerDeleteAccount**](#accountscontrollerdeleteaccount) | **DELETE** /accounts/delete-account | |
|[**accountsControllerFindOne**](#accountscontrollerfindone) | **GET** /accounts | |
|[**accountsControllerRecoverPassword**](#accountscontrollerrecoverpassword) | **PATCH** /accounts/recover-password | |
|[**accountsControllerResetPassword**](#accountscontrollerresetpassword) | **PATCH** /accounts/reset-password | |
|[**accountsControllerUpdate**](#accountscontrollerupdate) | **PATCH** /accounts | |

# **accountsControllerDeleteAccount**
> accountsControllerDeleteAccount()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.accountsControllerDeleteAccount();
```

### Parameters
This endpoint does not have any parameters.


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

# **accountsControllerFindOne**
> User accountsControllerFindOne()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.accountsControllerFindOne();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**User**

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

# **accountsControllerRecoverPassword**
> accountsControllerRecoverPassword(recoverPasswordDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    RecoverPasswordDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let recoverPasswordDto: RecoverPasswordDto; //

const { status, data } = await apiInstance.accountsControllerRecoverPassword(
    recoverPasswordDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recoverPasswordDto** | **RecoverPasswordDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsControllerResetPassword**
> accountsControllerResetPassword(resetPasswordDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    ResetPasswordDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let resetPasswordDto: ResetPasswordDto; //

const { status, data } = await apiInstance.accountsControllerResetPassword(
    resetPasswordDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordDto** | **ResetPasswordDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsControllerUpdate**
> accountsControllerUpdate(updateAccountDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    UpdateAccountDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let updateAccountDto: UpdateAccountDto; //

const { status, data } = await apiInstance.accountsControllerUpdate(
    updateAccountDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountDto** | **UpdateAccountDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

