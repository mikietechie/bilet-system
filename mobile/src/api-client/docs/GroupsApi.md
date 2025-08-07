# GroupsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**groupsControllerAddMember**](#groupscontrolleraddmember) | **POST** /api/v1/groups/{groupId}/members | |
|[**groupsControllerAddUser**](#groupscontrolleradduser) | **POST** /api/v1/groups/{groupId}/users | |
|[**groupsControllerCreate**](#groupscontrollercreate) | **POST** /api/v1/groups | |
|[**groupsControllerFindAll**](#groupscontrollerfindall) | **GET** /api/v1/groups | |
|[**groupsControllerFindAllGroupsByMembership**](#groupscontrollerfindallgroupsbymembership) | **GET** /api/v1/groups/member | |
|[**groupsControllerFindAllGroupsByOwner**](#groupscontrollerfindallgroupsbyowner) | **GET** /api/v1/groups/owned | |
|[**groupsControllerFindOne**](#groupscontrollerfindone) | **GET** /api/v1/groups/{id} | |
|[**groupsControllerFindUserGroups**](#groupscontrollerfindusergroups) | **GET** /api/v1/groups/user | |
|[**groupsControllerFindUsersByGroup**](#groupscontrollerfindusersbygroup) | **GET** /api/v1/groups/{groupId}/users | |
|[**groupsControllerReadMembers**](#groupscontrollerreadmembers) | **GET** /api/v1/groups/{groupId}/members | |
|[**groupsControllerRemove**](#groupscontrollerremove) | **DELETE** /api/v1/groups/{id} | |
|[**groupsControllerRemoveMember**](#groupscontrollerremovemember) | **DELETE** /api/v1/groups/{groupId}/members/{mid} | |
|[**groupsControllerRemoveUser**](#groupscontrollerremoveuser) | **DELETE** /api/v1/groups/{groupId}/users/{mid} | |
|[**groupsControllerUpdate**](#groupscontrollerupdate) | **PATCH** /api/v1/groups/{id} | |
|[**groupsControllerUpdateMember**](#groupscontrollerupdatemember) | **PATCH** /api/v1/groups/{groupId}/members/{mid} | |
|[**groupsControllerUpdateUser**](#groupscontrollerupdateuser) | **PATCH** /api/v1/groups/{groupId}/users/{mid} | |

# **groupsControllerAddMember**
> number groupsControllerAddMember(addGroupMemberDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    AddGroupMemberDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let addGroupMemberDto: AddGroupMemberDto; //

const { status, data } = await apiInstance.groupsControllerAddMember(
    groupId,
    addGroupMemberDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addGroupMemberDto** | **AddGroupMemberDto**|  | |
| **groupId** | [**number**] |  | defaults to undefined|


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

# **groupsControllerAddUser**
> number groupsControllerAddUser(addGroupUserDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    AddGroupUserDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let addGroupUserDto: AddGroupUserDto; //

const { status, data } = await apiInstance.groupsControllerAddUser(
    groupId,
    addGroupUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addGroupUserDto** | **AddGroupUserDto**|  | |
| **groupId** | [**number**] |  | defaults to undefined|


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

# **groupsControllerCreate**
> number groupsControllerCreate(createGroupDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    CreateGroupDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let createGroupDto: CreateGroupDto; //

const { status, data } = await apiInstance.groupsControllerCreate(
    createGroupDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupDto** | **CreateGroupDto**|  | |


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

# **groupsControllerFindAll**
> Array<Group> groupsControllerFindAll()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.groupsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Group>**

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

# **groupsControllerFindAllGroupsByMembership**
> Array<Group> groupsControllerFindAllGroupsByMembership()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.groupsControllerFindAllGroupsByMembership();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Group>**

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

# **groupsControllerFindAllGroupsByOwner**
> Array<Group> groupsControllerFindAllGroupsByOwner()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.groupsControllerFindAllGroupsByOwner();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Group>**

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

# **groupsControllerFindOne**
> Group groupsControllerFindOne()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Group**

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

# **groupsControllerFindUserGroups**
> Array<GroupUser> groupsControllerFindUserGroups()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.groupsControllerFindUserGroups();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GroupUser>**

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

# **groupsControllerFindUsersByGroup**
> Array<GroupUsersResponseItemDto> groupsControllerFindUsersByGroup()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerFindUsersByGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] |  | defaults to undefined|


### Return type

**Array<GroupUsersResponseItemDto>**

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

# **groupsControllerReadMembers**
> Array<GroupMembersResponseItemDto> groupsControllerReadMembers()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerReadMembers(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] |  | defaults to undefined|


### Return type

**Array<GroupMembersResponseItemDto>**

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

# **groupsControllerRemove**
> groupsControllerRemove()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerRemove(
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

# **groupsControllerRemoveMember**
> groupsControllerRemoveMember()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let mid: number; // (default to undefined)
let groupId: number; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerRemoveMember(
    mid,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mid** | [**number**] |  | defaults to undefined|
| **groupId** | [**number**] |  | defaults to undefined|


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

# **groupsControllerRemoveUser**
> groupsControllerRemoveUser()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let mid: number; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerRemoveUser(
    groupId,
    mid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] |  | defaults to undefined|
| **mid** | [**number**] |  | defaults to undefined|


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

# **groupsControllerUpdate**
> Group groupsControllerUpdate(updateGroupDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; // (default to undefined)
let updateGroupDto: UpdateGroupDto; //

const { status, data } = await apiInstance.groupsControllerUpdate(
    id,
    updateGroupDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupDto** | **UpdateGroupDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Group**

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

# **groupsControllerUpdateMember**
> groupsControllerUpdateMember(updateGroupMemberDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupMemberDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let mid: number; // (default to undefined)
let updateGroupMemberDto: UpdateGroupMemberDto; //

const { status, data } = await apiInstance.groupsControllerUpdateMember(
    groupId,
    mid,
    updateGroupMemberDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupMemberDto** | **UpdateGroupMemberDto**|  | |
| **groupId** | [**number**] |  | defaults to undefined|
| **mid** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groupsControllerUpdateUser**
> groupsControllerUpdateUser(updateGroupUserDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UpdateGroupUserDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let mid: number; // (default to undefined)
let updateGroupUserDto: UpdateGroupUserDto; //

const { status, data } = await apiInstance.groupsControllerUpdateUser(
    groupId,
    mid,
    updateGroupUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupUserDto** | **UpdateGroupUserDto**|  | |
| **groupId** | [**number**] |  | defaults to undefined|
| **mid** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

